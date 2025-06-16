export default {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
  ],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
    },
    extend: {
      colors: {
        secondary: "#E3EFFC",
        paragraph: "#344054",
        selected: "#1D2739",
        danger: "#D42620",
        "danger-overlay": "rgba(251, 234, 233, 1)",
        pending: "#F3A218",
        petal: "#FBEAE9",
        "card-border": "#F0F2F5",
        success: "#0F973D",
        card: "rgba(249, 250, 251, 1)",
        placeholder: "#98A2B3",
      },
      zIndex: {
        1: "1",
        9: "9",
        99: "99",
        999: "999",
        9999: "9999",
        99999: "99999",
        999999: "999999",
      },
      dropShadow: {
        popover:
          "0px 0px 0px 1px rgba(0, 0, 0, 0.05), 0px 10px 15px -3px rgba(0, 0, 0, 0.1), 0px 4px 6px -2px rgba(0, 0, 0, 0.05)",
      },
      fontSize: {
        x: "10px",
      },
      lineHeight: {
        default: "20.3px",
      },
      boxShadow: {
        "input-shadow": "0px 4px 8px -2px rgba(0, 0, 0, 0.08)",
        "table-shadow": "rgba(0, 0, 0, 0.04)",
        soft: "0px 14px 22px -9px rgba(16, 25, 40, 0.14), 0px 0px 3px -1px rgba(16, 25, 40, 0.04)",
        filter: "0px 10px 18px -2px #10192812",
        toast:
          "0px 4px 8px 3px rgba(0, 0, 0, 0.15), 0px 1px 3px rgba(0, 0, 0, 0.3);",
        popover:
          "0px 0px 0px 1px rgba(0, 0, 0, 0.05), 0px 10px 15px -3px rgba(0, 0, 0, 0.1), 0px 4px 6px -2px rgba(0, 0, 0, 0.05)",
      },
      fontFamily: {
        inter: [
          '"Inter", sans-serif',
          {
            fontVariationSettings: '"slnt" 0',
          },
        ],
      },
    },
  },
};
