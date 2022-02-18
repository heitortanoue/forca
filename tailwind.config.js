module.exports = {
    content: [
        "./pages/**/*.{js,ts,jsx,tsx}",
        "./components/**/*.{js,ts,jsx,tsx}",
      ],
  theme: {
    extend: {
        colors: {
            "primary": {
                DEFAULT: "var(--primary)",
                dark: "var(--primary-dark)"
            },
            "dark": "var(--dark)",
            "secondary": "var(--secondary)",
            "tertiary": "var(--tertiary)"
        }
    },
  },
  plugins: [],
}
