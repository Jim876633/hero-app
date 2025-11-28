export const theme = {
  colors: {
    primary: {
      gold: "#d4af37",
      lightGold: "#e6c34f",
      darkGold: "#b8941f",
      mutedGold: "#6a5520",
    },
    background: {
      darkBlue: "#0a1628",
      mediumBlue: "#1a2940",
      darkBrown: "#0f0a08",
      mediumBrown: "#1a1410",
      lightBrown: "#2a1810",
      veryLightBrown: "#3a2820",
    },
    border: {
      brown: "#4a3520",
    },
    text: {
      gold: "#d4af37",
      black: "#1a1410",
      red: "#ff6b6b",
      darkRed: "#8b0000",
      green: "#4ade80",
      darkGreen: "#15803d",
      disabled: "#9d8549",
    },
    overlay: {
      goldLight: "rgba(212, 175, 55, 0.05)",
      goldMedium: "rgba(212, 175, 55, 0.15)",
      brownLight: "rgba(74, 53, 32, 0.05)",
      brownMedium: "rgba(74, 53, 32, 0.2)",
    },
    shadow: {
      gold: "rgba(212, 175, 55, 0.5)",
      goldLight: "rgba(212, 175, 55, 0.3)",
      goldVeryLight: "rgba(212, 175, 55, 0.2)",
      goldDark: "rgba(212, 175, 55, 0.4)",
      goldMedium: "rgba(212, 175, 55, 0.15)",
      black: "rgba(0, 0, 0, 0.8)",
      blackLight: "rgba(0, 0, 0, 0.5)",
      blackMedium: "rgba(0, 0, 0, 0.6)",
      blackDark: "rgba(0, 0, 0, 0.4)",
      redLight: "rgba(139, 0, 0, 0.3)",
      greenLight: "rgba(0, 100, 0, 0.3)",
      whiteVeryLight: "rgba(255, 255, 255, 0.05)",
      whiteLight: "rgba(255, 255, 255, 0.3)",
      whiteMedium: "rgba(255, 255, 255, 0.4)",
      goldInset: "rgba(212, 175, 55, 0.1)",
      goldInsetLight: "rgba(212, 175, 55, 0.2)",
    },
  },
  gradients: {
    background: {
      page: "linear-gradient(180deg, #0a1628 0%, #1a2940 100%)",
      radialTop: "radial-gradient(ellipse at top, #1a2940, #0a1628)",
      radialCenter:
        "radial-gradient(ellipse at center top, rgba(212, 175, 55, 0.05), transparent 50%)",
    },
    card: {
      dark: "linear-gradient(135deg, #1a1410 0%, #0f0a08 100%)",
      selected: "linear-gradient(135deg, #2a1810 0%, #1a1410 100%)",
      goldOverlay:
        "linear-gradient(135deg, rgba(212, 175, 55, 0.1) 0%, transparent 100%)",
    },
    button: {
      gold: "linear-gradient(135deg, #d4af37, #b8941f)",
      goldHover: "linear-gradient(135deg, #e6c34f, #d4af37)",
      goldDisabled: "linear-gradient(135deg, #6a5520, #4a3520)",
      dark: "linear-gradient(135deg, #2a1810, #1a1005)",
      darkHover: "linear-gradient(135deg, #3a2820, #2a1810)",
    },
    stat: {
      row: "linear-gradient(90deg, rgba(74, 53, 32, 0.2), rgba(74, 53, 32, 0.05))",
      rowHover:
        "linear-gradient(90deg, rgba(212, 175, 55, 0.15), rgba(212, 175, 55, 0.05))",
    },
    border: {
      horizontal: "linear-gradient(90deg, transparent, #d4af37, transparent)",
    },
    message: {
      error:
        "linear-gradient(135deg, rgba(139, 0, 0, 0.7), rgba(100, 0, 0, 0.6))",
      success:
        "linear-gradient(135deg, rgba(0, 100, 0, 0.6), rgba(0, 80, 0, 0.5))",
    },
  },
  fonts: {
    primary: "'Cinzel', 'Trajan Pro', Georgia, serif",
    body: "'Cinzel', serif",
  },
};
