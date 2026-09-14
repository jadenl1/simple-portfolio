import React from "react";
import { render, screen, fireEvent, cleanup } from "@testing-library/react";
import "@testing-library/jest-dom";
import ThemeToggle from "./ThemeToggle";

afterEach(() => {
    cleanup();
    localStorage.clear();
    delete document.documentElement.dataset.theme;
    jest.restoreAllMocks();
    window.scrollY = 0;
});

test("defaults to dark and remembers the selected theme across mounts", () => {
    const { unmount } = render(<ThemeToggle />);
    expect(document.documentElement).toHaveAttribute("data-theme", "dark");
    fireEvent.click(screen.getByRole("switch", { name: "Light mode", checked: false }));
    expect(document.documentElement).toHaveAttribute("data-theme", "light");
    expect(localStorage.getItem("portfolio-theme")).toBe("light");
    unmount();
    render(<ThemeToggle />);
    fireEvent.click(screen.getByRole("switch", { name: "Light mode", checked: true }));
    expect(document.documentElement).toHaveAttribute("data-theme", "dark");
    expect(localStorage.getItem("portfolio-theme")).toBe("dark");
});

test("works when browser storage is blocked", () => {
    jest.spyOn(Storage.prototype, "getItem").mockImplementation(() => { throw new Error("blocked"); });
    jest.spyOn(Storage.prototype, "setItem").mockImplementation(() => { throw new Error("blocked"); });
    render(<ThemeToggle />);
    fireEvent.click(screen.getByRole("switch", { name: "Light mode", checked: false }));
    expect(document.documentElement).toHaveAttribute("data-theme", "light");
});

test("hides on downward scroll, reveals on upward scroll, and stays visible near the top", () => {
    render(<ThemeToggle />);
    const toggle = screen.getByRole("switch");
    const scrollTo = value => { window.scrollY = value; fireEvent.scroll(window); };
    scrollTo(100);
    expect(toggle).toHaveAttribute("data-scroll-hidden", "true");
    scrollTo(98);
    expect(toggle).toHaveAttribute("data-scroll-hidden", "true");
    scrollTo(90);
    expect(toggle).toHaveAttribute("data-scroll-hidden", "false");
    scrollTo(120);
    expect(toggle).toHaveAttribute("data-scroll-hidden", "true");
    scrollTo(0);
    scrollTo(10);
    expect(toggle).toHaveAttribute("data-scroll-hidden", "false");
});
