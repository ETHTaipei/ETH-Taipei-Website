import Colors from "./colors";

const createGridBackground = (
  backgroundColor: string,
  lineColor: string,
  desktopSize: number = 70,
  mobileSize: number = 45
) => `
  background-color: ${backgroundColor};
  background-image: 
    repeating-linear-gradient(to bottom, ${lineColor} 0px, ${lineColor} 1px, transparent 1px, transparent ${desktopSize}px),
    repeating-linear-gradient(to right, ${lineColor} 0px, ${lineColor} 1px, transparent 1px, transparent ${desktopSize}px);

  @media (max-width: 768px) {
    background-image: 
      repeating-linear-gradient(to bottom, ${lineColor} 0px, ${lineColor} 1px, transparent 1px, transparent ${mobileSize}px),
      repeating-linear-gradient(to right, ${lineColor} 0px, ${lineColor} 1px, transparent 1px, transparent ${mobileSize}px);
  }
`;

export const BlueGridBackgroundStyles = createGridBackground(
  Colors.brightBlue,
  "rgba(255, 255, 255, 0.1)"
);

export const GrayGridBackgroundStyles = createGridBackground(
  "rgba(237, 237, 237, 0.85)",
  "rgba(255, 255, 255, 0.5)"
);
