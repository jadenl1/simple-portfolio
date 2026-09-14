import React from 'react';
import { render, act, waitFor } from '@testing-library/react';
import '@testing-library/jest-dom';
import ViewTransition from './ViewTransition';

jest.mock('framer-motion', () => ({
    ...jest.requireActual('framer-motion'),
    useReducedMotion: () => true,
}));

test('tracks both view height changes and later content resizing, cleaning up observers', async () => {
    let notify;
    const disconnect = jest.fn();
    const originalObserver = global.ResizeObserver;
    global.ResizeObserver = class {
        constructor(callback) { notify = callback; }
        observe() {}
        disconnect() { disconnect(); }
    };
    let contentHeight = 240;
    const measure = jest.spyOn(HTMLElement.prototype, 'getBoundingClientRect')
        .mockImplementation(() => ({ height: contentHeight, width: 850, top: 0, left: 0, bottom: contentHeight, right: 850 }));
    try {
        const { container, rerender, unmount } = render(<ViewTransition view="timeline"><div>Timeline</div></ViewTransition>);
        await waitFor(() => expect(container.firstChild).toHaveStyle({ height: '240px' }));
        contentHeight = 1400;
        rerender(<ViewTransition view="default"><div>Default</div></ViewTransition>);
        await waitFor(() => expect(container.firstChild).toHaveStyle({ height: '1400px' }));
        contentHeight = 1600;
        act(() => notify());
        await waitFor(() => expect(container.firstChild).toHaveStyle({ height: '1600px' }));
        contentHeight = 240;
        rerender(<ViewTransition view="timeline"><div>Timeline</div></ViewTransition>);
        await waitFor(() => expect(container.firstChild).toHaveStyle({ height: '240px' }));
        unmount();
        expect(disconnect).toHaveBeenCalledTimes(3);
    } finally {
        measure.mockRestore();
        global.ResizeObserver = originalObserver;
    }
});
