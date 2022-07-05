module.exports = {
  mode: "jit",
  content: ["./src/**/*.{html,js}"],
  theme: {
    
    extend: {
      colors: {
        primary: "#C72020",
      },

    screens: {
      '-sm' : { max: '639px'},
      // => @media (max-width: 639px) { ... }

      'gg' : { }
    }
    },
  },
  
  variants: {},
  plugins: [require("@tailwindcss/forms"),
  require("@tailwindcss/aspect-ratio")],
};
