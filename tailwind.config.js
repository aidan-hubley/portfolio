/** @type {import('tailwindcss').Config} */
const colors = require("tailwindcss/colors");

module.exports = {
  content: ["./**/*.{html,js}"],
  theme: {
    extend: {},
    screens: {
      xs: "480px",

      sm: "640px",
      // => @media (min-width: 640px) { ... }

      md: "740px",
      // => @media (min-width: 768px) { ... }

      lg: "1024px",
      // => @media (min-width: 1024px) { ... }

      xl: "1280px",
      // => @media (min-width: 1280px) { ... }

      "2xl": "1536px"
      // => @media (min-width: 1536px) { ... }
    },
    colors: {
      ...colors,
      DelftBlue: "#1a2f58",
      YaleBlue: "#24406b",
      UCLABlue: "#4273a3",
      SilverLake: "#6290c8",
      BlueGray: "#7296c2",
      ColumbiaBlue: "#beccdd",

      EerieBlack: "#212115",
      BlackOlive: "#2A2C1A",
      DrabDarkBrown: "#323B1A",
      DarkMossGreen: "#436016",
      Avocado: "#5A7C28",
      Asparagus: "##8EA66D",

      RaisinBlack: "#202030",
      EnglishViolet: "#39304A",
      WalnutBrown: "#635C51",
      BattleshipGrey: "#7D7461",
      Khaki: "#B0A990",
      Dun: "#C4BEAB",
    }
  },
};