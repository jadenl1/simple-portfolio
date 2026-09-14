import React from 'react';
import { act, render, screen, fireEvent, within } from '@testing-library/react';
import '@testing-library/jest-dom';
import userEvent from '@testing-library/user-event';
import TimelineView, { timelineEntries, monthIndex, packLanes, education, timelineOrigin } from './TimelineView';
import { experiences } from '../data/experiences';
import { startups } from '../data/startups';
import { volunteer } from '../data/volunteer';
import { projects } from '../data/projects';

test('includes every dated item with valid, chronologically ordered ranges', () => {
    expect(timelineEntries).toHaveLength(experiences.length + startups.length + volunteer.length + projects.length + education.length);
    timelineEntries.forEach((item, index) => {
        expect(monthIndex(item.end)).toBeGreaterThanOrEqual(monthIndex(item.start));
        if (index) expect(monthIndex(item.start)).toBeGreaterThanOrEqual(monthIndex(timelineEntries[index - 1].start));
    });
});

test('short projects remain hoverable without instructional text', () => {
    render(<TimelineView />);
    const bar = screen.getByRole('group', { name: /Crypto-Currency.*/ });
    expect(parseFloat(bar.style.width)).toBeGreaterThan(0);
    fireEvent.mouseEnter(bar);
    expect(screen.queryByText('Projects · Oct 2021')).not.toBeInTheDocument();
    expect(screen.queryByText(/Each bar marks|A little of everything|Hover to preview/)).not.toBeInTheDocument();
});

test('clicking an entry does not open a dialog and keyboard focus still reveals details', () => {
    render(<TimelineView />);
    const entry = screen.getByRole('group', { name: /Crypto-Currency/ });
    fireEvent.click(entry);
    expect(screen.queryByRole('dialog')).not.toBeInTheDocument();
    expect(screen.queryByRole('tooltip')).not.toBeInTheDocument();
    fireEvent.focus(entry);
    expect(screen.getByRole('tooltip')).toBeInTheDocument();
    fireEvent.blur(entry);
    expect(screen.queryByRole('tooltip')).not.toBeInTheDocument();
});

test('overlapping activities share the same time scale', () => {
    render(<TimelineView />);
    const microsoft = screen.getByRole('group', { name: /Microsoft, Experience.*/ });
    const gateway = screen.getByRole('group', { name: /x402.*/ });
    const start = element => parseFloat(element.style.left);
    const end = element => start(element) + parseFloat(element.style.width);
    expect(start(microsoft)).toBeLessThan(end(gateway));
    expect(start(gateway)).toBeLessThan(end(microsoft));
});

test('clicking a hovered entry preserves its cursor position, including when another entry has focus', () => {
    render(<TimelineView />);
    const entry = screen.getByRole('group', { name: /Crypto-Currency/ });
    const other = screen.getByRole('group', { name: /Microsoft, Experience/ });
    act(() => other.focus());
    fireEvent.mouseEnter(entry, { clientX: 200, clientY: 150 });
    const card = screen.getByRole('tooltip');
    const position = { left: card.style.left, top: card.style.top };
    userEvent.click(entry, undefined, { skipHover: true });
    expect(screen.getByRole('tooltip')).toBe(card);
    expect(card.style.left).toBe(position.left);
    expect(card.style.top).toBe(position.top);
    expect(other).toHaveFocus();
    fireEvent.mouseMove(entry, { clientX: 220, clientY: 170 });
    expect(card.style.left).toBe('236px');
});


test('packs separate activities together without putting overlapping date ranges in the same lane', () => {
    const lanes = packLanes(timelineEntries);
    expect(lanes.length).toBeLessThan(timelineEntries.length);
    expect(lanes.some(lane => lane.length > 1)).toBe(true);
    expect(lanes.flat()).toHaveLength(timelineEntries.length);
    lanes.forEach(lane => lane.slice(1).forEach((item, index) => {
        expect(monthIndex(lane[index].end)).toBeLessThan(monthIndex(item.start));
    }));
});

test('bars carry their own title and year labels remain without navigation buttons', () => {
    render(<TimelineView />);
    const bar = screen.getByRole('group', { name: /Microsoft, Experience.*/ });
    expect(bar).toHaveTextContent('Microsoft');
    expect(bar).toHaveAttribute('aria-label', expect.stringContaining('Microsoft, Experience'));
    expect(bar).toHaveAttribute('aria-label', expect.stringContaining('May 2026 — Aug 2026'));
    expect(screen.getByText('2022')).toBeInTheDocument();
    expect(screen.queryByRole('button', { name: '2022' })).not.toBeInTheDocument();
});


test('project lines keep dates accessible while the detail card shows one description bullet', () => {
    render(<TimelineView />);
    const bar = screen.getByRole('group', { name: /x402.*/ });
    expect(bar).toHaveAttribute('aria-label', expect.stringContaining('Projects'));
    expect(bar).toHaveAttribute('aria-label', expect.stringContaining('Apr 2026'));
    expect(bar).not.toHaveTextContent('Built an AWS Fargate reverse proxy');
    fireEvent.mouseEnter(bar);
    const card = screen.getByRole('tooltip');
    expect(card).toHaveTextContent('Built an AWS Fargate reverse proxy');
    expect(card).not.toHaveTextContent('Reduced payment finality');
    expect(card).not.toHaveTextContent('Secured credentials');
});


test('hover card follows the cursor, shows one project bullet, and dismisses on exit or Escape', () => {
    render(<TimelineView />);
    const bar = screen.getByRole('group', { name: /x402.*/ });
    fireEvent.mouseEnter(bar, { clientX: 100, clientY: 100 });
    const card = screen.getByRole('tooltip');
    expect(card).toHaveTextContent('Built an AWS Fargate reverse proxy');
    expect(card).not.toHaveTextContent('Reduced payment finality');
    expect(card.style.left).toBe('116px');
    fireEvent.mouseMove(bar, { clientX: 200, clientY: 150 });
    expect(card.style.left).toBe('216px');
    fireEvent.keyDown(bar, { key: 'Escape' });
    expect(screen.queryByRole('tooltip')).not.toBeInTheDocument();
    fireEvent.mouseEnter(bar);
    fireEvent.mouseLeave(bar);
    expect(screen.queryByRole('tooltip')).not.toBeInTheDocument();
});


test('starts in August 2021 and includes both education ranges on the same month scale', () => {
    const { container } = render(<TimelineView />);
    expect(timelineOrigin).toBe(monthIndex('2021-08'));
    const months = container.querySelectorAll('.timeline-month-letter');
    expect(Array.from(months).slice(0, 5).map(node => node.textContent).join('')).toBe('ASOND');
    expect(months).toHaveLength(monthIndex('2027-05') + 1 - timelineOrigin);
    expect(container.querySelector('.timeline-scroll').scrollLeft).toBe(0);
    const bs = screen.getByRole('group', { name: /B.S. Computer Science.*Education, Aug 2022 — May 2025/ });
    const ms = screen.getByRole('group', { name: /M.S. Computer Science.*Education, Aug 2025 — May 2027/ });
    expect(parseFloat(bs.style.left)).toBeCloseTo(12 / 70 * 100);
    expect(parseFloat(ms.style.left) + parseFloat(ms.style.width)).toBeCloseTo(100);
    fireEvent.mouseEnter(ms);
    expect(screen.getByRole('tooltip')).toHaveTextContent('Bowie State University');
});


test('hover details have an icon label, title, subtitle, and one consistent date line', () => {
    render(<TimelineView />);
    fireEvent.mouseEnter(screen.getByRole('group', { name: /Microsoft, Experience.*/ }));
    const card = screen.getByRole('tooltip');
    expect(within(card).getByText('Work experience')).toBeInTheDocument();
    expect(card.querySelector('.timeline-detail-category svg')).toBeInTheDocument();
    expect(within(card).getByRole('heading', { name: 'Microsoft' })).toBeInTheDocument();
    expect(within(card).getByText('Software Engineer Intern')).toBeInTheDocument();
    expect(within(card).getAllByText('May 2026 — Aug 2026')).toHaveLength(1);
    expect(within(card).getByText('Windows OS Shell.')).toBeInTheDocument();
});
