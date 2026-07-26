import { describe, expect, it } from "vitest";
import { resolveCfpPhase } from "./useCfpPhase";

const automatic = {
  closesAt: "2026-08-16T11:59:00.000Z",
  phaseOverride: "auto" as const,
};

describe("resolveCfpPhase", () => {
  it("keeps the CFP open before Aug 15, 2026 23:59 AoE", () => {
    expect(
      resolveCfpPhase(Date.parse("2026-08-16T11:58:59.999Z"), automatic)
    ).toBe("open");
  });

  it("closes the CFP at the configured deadline", () => {
    expect(
      resolveCfpPhase(Date.parse("2026-08-16T11:59:00.000Z"), automatic)
    ).toBe("closed");
  });

  it("supports a manual open override", () => {
    expect(
      resolveCfpPhase(Date.parse("2027-01-01T00:00:00.000Z"), {
        ...automatic,
        phaseOverride: "open",
      })
    ).toBe("open");
  });

  it("supports a manual closed override", () => {
    expect(
      resolveCfpPhase(Date.parse("2026-01-01T00:00:00.000Z"), {
        ...automatic,
        phaseOverride: "closed",
      })
    ).toBe("closed");
  });
});
