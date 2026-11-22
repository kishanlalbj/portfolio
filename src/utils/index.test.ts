import { afterAll, describe, expect, it, vi } from "vitest";

vi.stubGlobal("IntersectionObserver", class {});

const { calcDistance } = await import("./index");

afterAll(() => {
  vi.unstubAllGlobals();
});

describe("calcDistance", () => {
  it("calculates the distance between two points", () => {
    expect(calcDistance({ x: 0, y: 0 }, { x: 3, y: 4 })).toBe(5);
  });

  it("returns zero for identical points", () => {
    expect(calcDistance({ x: 2, y: -3 }, { x: 2, y: -3 })).toBe(0);
  });
});
