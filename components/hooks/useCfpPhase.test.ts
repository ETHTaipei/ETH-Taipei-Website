import { createElement } from "react";
import { renderToString } from "react-dom/server";
import { CFP_CONFIG } from "@/public/constant/flags";
import { describe, expect, it, vi } from "vitest";
import { CfpPhase, resolveCfpPhase, useCfpPhase } from "./useCfpPhase";

const automatic = {
  closesAt: "2026-08-21T11:59:00.000Z",
  phaseOverride: "auto" as const,
};

describe("resolveCfpPhase", () => {
  it("uses the configured Aug 20, 2026 23:59 AoE deadline", () => {
    expect(CFP_CONFIG.closesAt).toBe("2026-08-21T11:59:00.000Z");
  });

  it("keeps the CFP open before Aug 20, 2026 23:59 AoE", () => {
    expect(
      resolveCfpPhase(Date.parse("2026-08-21T11:58:59.999Z"), automatic)
    ).toBe("open");
  });

  it("closes the CFP at the configured deadline", () => {
    expect(
      resolveCfpPhase(Date.parse("2026-08-21T11:59:00.000Z"), automatic)
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

describe("useCfpPhase", () => {
  it("uses the serialized phase for the server render regardless of its clock", () => {
    const PhaseProbe = ({ initialPhase }: { initialPhase: CfpPhase }) => {
      return createElement("span", null, useCfpPhase(initialPhase));
    };

    vi.useFakeTimers();
    vi.setSystemTime("2026-08-22T00:00:00.000Z");

    try {
      expect(
        renderToString(createElement(PhaseProbe, { initialPhase: "open" }))
      ).toContain(">open</span>");
    } finally {
      vi.useRealTimers();
    }
  });
});
