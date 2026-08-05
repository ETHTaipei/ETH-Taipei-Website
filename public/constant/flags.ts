/**
 * Soft-launch toggles for ETHTaipei 2026.
 * Flip a flag to `true` once the corresponding content / data / form is ready.
 */
export const FLAGS = {
  showSpeakers: false,
  showSponsors: true,
  showPartners: false,
  showMediaPartners: false,
  showAgenda: false,
  showTickets: false,
  showApplyCTAs: false,
  showSideEvents: false,
  showCommunityCalendar: false,
};

export type CfpPhaseOverride = "auto" | "open" | "closed";

/**
 * CFP closes at Aug 20, 2026 23:59 Anywhere on Earth (UTC-12),
 * which is Aug 21, 2026 11:59 UTC.
 *
 * Keep `phaseOverride` on "auto" for the scheduled transition. Use "open" or
 * "closed" when the team needs to extend or end the CFP manually.
 */
export const CFP_CONFIG = {
  closesAt: "2026-08-21T11:59:00.000Z",
  phaseOverride: "auto" as CfpPhaseOverride,
};
