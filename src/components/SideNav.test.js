import React from "react";
import { render, screen, fireEvent, act, cleanup } from "@testing-library/react";
import "@testing-library/jest-dom";
import SideNav from "./SideNav";

const OriginalObserver = global.ResizeObserver;
beforeEach(() => {
    global.ResizeObserver = class { observe() {} disconnect() {} };
    jest.spyOn(window, "requestAnimationFrame").mockImplementation(callback => setTimeout(callback, 0));
    jest.useFakeTimers();
});
afterEach(() => {
    cleanup();
    jest.useRealTimers();
    jest.restoreAllMocks();
    global.ResizeObserver = OriginalObserver;
    localStorage.clear();
});

test("links to sections and tracks the section passing the reading position in both directions", () => {
    let offset = 0;
    jest.spyOn(HTMLElement.prototype, "getBoundingClientRect").mockImplementation(function () {
        const positions = { about: 0, experience: 600, startups: 1200, community: 1800, projects: 2400, photos: 3000, footer: 3600 };
        return { top: (positions[this.id] ?? 0) - offset };
    });
    render(<><SideNav view="default" />{["about", "experience", "startups", "community", "projects", "photos", "footer"].map(id => <section id={id} key={id} />)}</>);
    expect(screen.getByRole("link", { name: "About" })).toHaveAttribute("aria-current", "location");
    expect(screen.getByRole("link", { name: "Projects" })).toHaveAttribute("href", "#projects");
    offset = 1200;
    fireEvent.scroll(window);
    act(() => jest.runOnlyPendingTimers());
    expect(screen.getByRole("link", { name: "Startups" })).toHaveAttribute("aria-current", "location");
    offset = 600;
    fireEvent.scroll(window);
    act(() => jest.runOnlyPendingTimers());
    expect(screen.getByRole("link", { name: "Experience" })).toHaveAttribute("aria-current", "location");
});

test("timeline view offers only destinations present in that view", () => {
    const { rerender } = render(<SideNav view="default" />);
    rerender(<SideNav view="timeline" />);
    expect(screen.getByRole("link", { name: "Timeline" })).toHaveAttribute("href", "#timeline");
    expect(screen.queryByRole("link", { name: "Experience" })).not.toBeInTheDocument();
    expect(screen.getByRole("link", { name: "Photos" })).toBeInTheDocument();
    expect(screen.getByRole("button", { name: "Switch to light mode" })).toBeInTheDocument();
});
