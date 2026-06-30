import { describe, expect, it, vi } from "vitest";

vi.mock("../src/PlasiusLTDLogo.svg", () => ({
  default: "/assets/PlasiusLTDLogo.svg",
}));
vi.mock("../src/PlasiusLTDLogoChromeMark.svg", () => ({
  default: "/assets/PlasiusLTDLogoChromeMark.svg",
}));
vi.mock("../src/PlasiusLTDLogoChromeHeaderLight.svg", () => ({
  default: "/assets/PlasiusLTDLogoChromeHeaderLight.svg",
}));
vi.mock("../src/PlasiusLTDLogoChromeHeaderDark.svg", () => ({
  default: "/assets/PlasiusLTDLogoChromeHeaderDark.svg",
}));
vi.mock("../src/PlasiusLTDLogoChromeIcon.svg", () => ({
  default: "/assets/PlasiusLTDLogoChromeIcon.svg",
}));

describe("@plasius/sharedassets", () => {
  it("exports the shared logo asset path", async () => {
    const mod = await import("../src/index");
    expect(mod.PlasiusLTDLogo).toBe("/assets/PlasiusLTDLogo.svg");
  });

  it("exports chrome-shell branding pack asset paths", async () => {
    const mod = await import("../src/index");

    expect(mod.PlasiusLTDLogoChromeMark).toBe(
      "/assets/PlasiusLTDLogoChromeMark.svg",
    );
    expect(mod.PlasiusLTDLogoChromeHeaderLight).toBe(
      "/assets/PlasiusLTDLogoChromeHeaderLight.svg",
    );
    expect(mod.PlasiusLTDLogoChromeHeaderDark).toBe(
      "/assets/PlasiusLTDLogoChromeHeaderDark.svg",
    );
    expect(mod.PlasiusLTDLogoChromeIcon).toBe(
      "/assets/PlasiusLTDLogoChromeIcon.svg",
    );
  });
});
