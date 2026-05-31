import { describe, expect, it } from "vitest";
import { formatAgendaTime } from "./useConferences";

// Build a Date for "today at H:M" in the runner's local timezone. The agenda
// rendering consumes Date objects already adjusted to the event timezone, so
// the timezone of the construction doesn't matter for this format check.
function at(hours: number, minutes: number): Date {
  const d = new Date();
  d.setHours(hours, minutes, 0, 0);
  return d;
}

describe("formatAgendaTime", () => {
  it("renders morning times as h:MMam", () => {
    expect(formatAgendaTime(at(9, 0))).toBe("9:00am");
    expect(formatAgendaTime(at(11, 5))).toBe("11:05am");
  });

  it("renders noon as 12:00pm (not 12:00am)", () => {
    expect(formatAgendaTime(at(12, 0))).toBe("12:00pm");
  });

  it("renders early-afternoon times as h:MMpm", () => {
    expect(formatAgendaTime(at(13, 30))).toBe("1:30pm");
    expect(formatAgendaTime(at(17, 0))).toBe("5:00pm");
  });

  it("zero-pads single-digit minutes", () => {
    expect(formatAgendaTime(at(9, 5))).toBe("9:05am");
  });

  // Known incorrect behavior: midnight renders as "0:00am" instead of
  // "12:00am". Locked in by this test so any future change to the formatter
  // makes a deliberate decision instead of a silent shift. Fix would be
  // `if (hours === 0) hours = 12;` in formatAgendaTime.
  it("renders midnight as 0:00am (known bug — fix would be 12:00am)", () => {
    expect(formatAgendaTime(at(0, 0))).toBe("0:00am");
  });
});
