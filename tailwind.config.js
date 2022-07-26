module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      // fontFamily: {
      //   sans: ["Inter var", ...defaultTheme.fontFamily.sans],
      // },
      fontFamily: {
        primary: ["Lato", "sans-serif"],
        secondary: ["Poppins", "sans-serif"],
        // DMSans: ["DM Sans", "sans-serif"],
      },
      colors: {
        colorPrimary: "#262466",
        colorPrimaryDark: "#252525",
        colorSecondary: "#3AB75D",
        colorTertiary: "#333333",
      },
    },
  },
};
