import { describe, expect, it, vi } from "vitest";

vi.mock("../src/PlasiusLTDLogo.svg", () => ({
  default: "/assets/PlasiusLTDLogo.svg",
}));

describe("@plasius/sharedassets", () => {
  it("exports the shared logo asset path", async () => {
    const mod = await import("../src/index");
    expect(mod.PlasiusLTDLogo).toBe("/assets/PlasiusLTDLogo.svg");
  });
});
