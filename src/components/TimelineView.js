import React, { useLayoutEffect, useRef, useState } from 'react';
import { createPortal } from 'react-dom';
import { FiBriefcase } from 'react-icons/fi';
import { MdOutlineSchool, MdOutlineFolderCopy } from 'react-icons/md';
import { HiOutlineLightningBolt } from 'react-icons/hi';
import { TbHeartHandshake } from 'react-icons/tb';
import { experiences } from '../data/experiences';
import { startups } from '../data/startups';
import { volunteer } from '../data/volunteer';
import { projects } from '../data/projects';
import './TimelineView.css';

const categoryIcons = {
    Experience: FiBriefcase,
    Startups: HiOutlineLightningBolt,
    Community: TbHeartHandshake,
    Projects: MdOutlineFolderCopy,
    Education: MdOutlineSchool,
};

function CategoryIcon({ category }) {
    const Icon = categoryIcons[category];
    return <Icon className="timeline-category-icon" aria-hidden="true" />;
}

export const monthIndex = (date) => {
    const [year, month] = date.split('-').map(Number);
    return year * 12 + month - 1;
};

// Reuse the first description bullet without duplicating project copy.
export const projectPreview = (details) => {
    const text = (node) => {
        if (typeof node === 'string' || typeof node === 'number') return String(node);
        if (!React.isValidElement(node)) return '';
        if (node.type === 'br') return '\n';
        if (node.type === 'a') return '';
        return React.Children.toArray(node.props.children).map(text).join('');
    };
    return text(details).split('\n').map(line => line.trim()).find(Boolean) || '';
};

export const education = [
    {
        title: 'B.S. Computer Science · UMD',
        detailTitle: 'B.S. Computer Science',
        role: 'University of Maryland, College Park',
        start: '2022-08',
        end: '2025-05',
        details: <p>Aug 2022 — May 2025</p>,
    },
    {
        title: 'M.S. Computer Science · Bowie State',
        detailTitle: 'M.S. Computer Science',
        expected: true,
        role: 'Bowie State University',
        start: '2025-08',
        end: '2027-05',
        details: <p>Aug 2025 — May 2027 (expected)</p>,
    },
];

export const timelineEntries = [
    ...education.map(item => ({ ...item, category: 'Education' })),
    ...experiences.map(item => ({ ...item, category: 'Experience' })),
    ...startups.map(item => ({ ...item, category: 'Startups' })),
    ...volunteer.map(item => ({ ...item, category: 'Community' })),
    ...projects.map(item => ({ ...item, category: 'Projects', preview: projectPreview(item.details) })),
].map(item => ({ ...item, title: item.title || item.company }))
    .sort((a, b) => a.start.localeCompare(b.start) || a.title.localeCompare(b.title));

// An interval can reuse a lane only after the previous interval ends.
// End months are inclusive, so two activities in the same month overlap.
export const packLanes = (entries) => {
    const lanes = [];
    [...entries].sort((a, b) => a.start.localeCompare(b.start) || a.title.localeCompare(b.title)).forEach(item => {
        const lane = lanes.find(items => monthIndex(items[items.length - 1].end) < monthIndex(item.start));
        if (lane) lane.push(item);
        else lanes.push([item]);
    });
    return lanes;
};
const lanes = packLanes(timelineEntries);

export const timelineOrigin = monthIndex('2021-08');
const origin = timelineOrigin;
const end = Math.max(...timelineEntries.map(item => monthIndex(item.end))) + 1;
const span = end - origin;
const firstYear = Math.floor(origin / 12);
const lastYear = Math.floor((end - 1) / 12);
const years = Array.from({ length: lastYear - firstYear + 1 }, (_, i) => firstYear + i);
const yearMonths = year => Array.from(
    { length: Math.min(end, (year + 1) * 12) - Math.max(origin, year * 12) },
    (_, i) => (Math.max(origin, year * 12) + i) % 12
);
const yearColumns = years.map(year => `${yearMonths(year).length}fr`).join(' ');
const percent = (month) => `${((month - origin) / span) * 100}%`;
const dateLabel = (value) => new Date(`${value}-01T00:00:00Z`).toLocaleDateString('en-US', {
    month: 'short', year: 'numeric', timeZone: 'UTC',
});
const dates = (item) => item.start === item.end ? dateLabel(item.start) : `${dateLabel(item.start)} — ${dateLabel(item.end)}`;

const categoryLabels = {
    Experience: 'Work experience',
    Startups: 'Startup',
    Community: 'Volunteer & extracurricular',
    Projects: 'Project',
    Education: 'Education',
};

function DetailContent({ item }) {
    const description = item.category === 'Projects'
        ? <p>{item.preview}</p>
        : item.category === 'Education'
            ? null
            : React.Children.toArray(item.details.props.children).slice(1);
    return <div className="timeline-detail">
        <div className="timeline-detail-category">
            <CategoryIcon category={item.category} />
            <span>{categoryLabels[item.category]}</span>
        </div>
        <h2 className="timeline-detail-title">{item.detailTitle || item.title}</h2>
        {item.role && <p className="timeline-detail-subtitle">{item.role}</p>}
        <p className="timeline-detail-dates">{dates(item)}{item.expected ? ' · Expected' : ''}</p>
        {description && <div className="timeline-detail-body">{description}</div>}
    </div>;
}

function HoverCard({ item, point }) {
    const ref = useRef(null);
    const [size, setSize] = useState({ width: 360, height: 220 });
    useLayoutEffect(() => {
        const { width, height } = ref.current.getBoundingClientRect();
        setSize({ width, height });
    }, [item]);
    const left = Math.max(12, Math.min(point.x + 16, window.innerWidth - size.width - 12));
    const top = Math.max(12, Math.min(
        point.y + 16 + size.height > window.innerHeight - 12 ? point.y - size.height - 16 : point.y + 16,
        window.innerHeight - size.height - 12
    ));
    return createPortal(
        <div ref={ref} id="timeline-hover-card" role="tooltip" className="timeline-hover-card" style={{ left, top }}>
            <DetailContent item={item} />
        </div>, document.body
    );
}

export default function TimelineView() {
    const [hover, setHover] = useState(null);
    const scrollRef = useRef(null);
    return (
        <section className="timeline" aria-label="Portfolio timeline">
            <div onScroll={() => setHover(null)} ref={scrollRef} className="timeline-scroll" tabIndex={0} role="region" aria-label="Timeline chart; scroll horizontally to explore years">
                <div className="timeline-chart" style={{ "--timeline-width": `${(span / 12) * 100}%`, "--timeline-columns": yearColumns }}>
                    <div className="timeline-axis">
                        {years.map(year => <span key={year}>{year}</span>)}
                    </div>
                    <div className="timeline-months" aria-hidden="true">
                        {years.map(year => (
                            <div key={year} style={{ gridTemplateColumns: `repeat(${yearMonths(year).length}, 1fr)` }}>
                                {yearMonths(year).map(month => (
                                    <span key={month}><span className="timeline-month-letter">{'JFMAMJJASOND'[month]}</span></span>
                                ))}
                            </div>
                        ))}
                    </div>
                    <div className="timeline-lanes">
                        <div className="timeline-grid" aria-hidden="true">{years.map(year => <span key={year} />)}</div>
                        {lanes.map((lane, index) => (
                            <div className="timeline-row" key={index} style={{ '--row-delay': `${100 + index * 55}ms` }}>
                                {lane.map(item => (
                                    <div key={`${item.category}-${item.title}`} className="timeline-bar" role="group" tabIndex={0}
                                        style={{ left: percent(monthIndex(item.start)), width: `${((monthIndex(item.end) + 1 - monthIndex(item.start)) / span) * 100}%` }}
                                        aria-label={`${item.title}, ${item.category}, ${dates(item)}`}
                                        aria-describedby={hover?.item === item ? 'timeline-hover-card' : undefined}
                                        onMouseEnter={event => setHover({ item, point: { x: event.clientX, y: event.clientY } })}
                                        onMouseMove={event => setHover(current => current && ({ item, point: { x: event.clientX, y: event.clientY } }))}
                                        onMouseLeave={() => setHover(null)}
                                        onMouseDown={event => event.preventDefault()}
                                        onFocus={event => {
                                            const rect = event.currentTarget.getBoundingClientRect();
                                            setHover({ item, point: { x: Math.max(12, rect.left), y: rect.bottom } });
                                        }}
                                        onBlur={() => setHover(null)}
                                        onKeyDown={event => { if (event.key === 'Escape') setHover(null); }}>
                                        <span className="timeline-bar-label">
                                            <CategoryIcon category={item.category} />
                                            <strong>{item.title}</strong>
                                        </span>
                                    </div>
                                ))}
                            </div>
                        ))}
                    </div>
                </div>
            </div>
            {hover && <HoverCard item={hover.item} point={hover.point} />}
        </section>
    );
}
