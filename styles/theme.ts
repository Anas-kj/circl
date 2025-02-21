const commonStyles = {
  radiusXs: "3px",
  radiusMd: "7px",
  radiusXl: "11px",
  transitionTime: ".25s",
  primaryGreen: "#1fbe00",
}

export const lightTheme = {
  bodyBg: "#ffffff",
  bodySecBg: "#e5e5e5",
  bodyThrBg: "#0f0f0f",
  headings: "#2D2C29",
  textPrimary: "#000000",
  textSecondary: "#6A6A6A",
  border: "#d6d6d4",
  contrast: "#2D2C29",
  cardBg: "#F3F3F3",
  mode: "light",
  ...commonStyles,
}
export const darkTheme = {
  bodyBg: "#0f0f0f",
  bodySecBg: "#e5e5e5",
  bodyThrBg: "#ffffff",
  headings: "#f5f6f7",
  textPrimary: "#ffffff",
  textSecondary: "#B5B5B6",
  border: "#303133",
  contrast: "#f5f6f7",
  cardBg: "#232426",
  mode: "dark",
  ...commonStyles,
}
