module.exports = {
	plugins: [require("daisyui")],
	content: ['./src/**/*.{html,js}', './node_modules/tw-elements/dist/js/**/*.js'],
  plugins: [
    require('tw-elements/dist/plugin')
  ],
    content: ["./src/**/*.{js,jsx,ts,tsx}"],
	theme: {
		extend: {
			// fontFamily: {
			//   sans: ["Inter var", ...defaultTheme.fontFamily.sans],
			// },
			fontFamily: {
				secondary: ["Lato", "sans-serif"],
				primary: ["Poppins", "sans-serif"],
				// DMSans: ["DM Sans", "sans-serif"],
			},
			colors: {
				colorPrimary: "#262466",
				colorPrimaryDark: "#252525",
				colorSecondary: "#3AB75D",
				colorTertiary: "#333333",
				colorGreen: "#86D19B",
			},
		},
	},
};
