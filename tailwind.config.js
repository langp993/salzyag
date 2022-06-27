module.exports = {
  mode: "jit",
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        primary: "#C72020",
      },
    },
  },
  variants: {},
  plugins: [require("@tailwindcss/forms")],
};
