import { CFP_CONFIG, CfpPhaseOverride } from "@/public/constant/flags";
import { useEffect, useState } from "react";

export type CfpPhase = "open" | "closed";

type CfpConfig = {
  closesAt: string;
  phaseOverride: CfpPhaseOverride;
};

const MAX_TIMEOUT_MS = 2_147_000_000;

export const resolveCfpPhase = (
  now = Date.now(),
  config: CfpConfig = CFP_CONFIG
): CfpPhase => {
  if (config.phaseOverride !== "auto") {
    return config.phaseOverride;
  }

  const closesAt = Date.parse(config.closesAt);
  if (Number.isNaN(closesAt)) {
    return "closed";
  }

  return now < closesAt ? "open" : "closed";
};

export const useCfpPhase = (): CfpPhase => {
  const [phase, setPhase] = useState<CfpPhase>(() => resolveCfpPhase());

  useEffect(() => {
    if (CFP_CONFIG.phaseOverride !== "auto") {
      setPhase(CFP_CONFIG.phaseOverride);
      return;
    }

    let timeout: number | undefined;

    const syncPhase = () => {
      setPhase(resolveCfpPhase());

      const remaining = Date.parse(CFP_CONFIG.closesAt) - Date.now();
      if (remaining > 0) {
        timeout = window.setTimeout(
          syncPhase,
          Math.min(remaining + 1_000, MAX_TIMEOUT_MS)
        );
      }
    };

    syncPhase();
    return () => {
      if (timeout !== undefined) window.clearTimeout(timeout);
    };
  }, []);

  return phase;
};
