type BreakPointSize = "sm" | "md" | "lg" | "xl";

export const HEADER_HEIGHT = 90;

export const BreakPoints: { [key in BreakPointSize]: number } = {
  sm: 640,
  md: 768,
  lg: 1024,
  xl: 1280,
};
