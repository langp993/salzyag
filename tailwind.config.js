module.exports = {
  mode: "jit",
  content: ["./src/**/*.{html,js}"],
  theme: {
    
    extend: {
      colors: {
        primary: "#C72020",
      },
      
      fontFamily: {
        'nunito': ['nunito', 'sans-serif'],
        'MyFont': ['"My Font"', 'serif'] // Ensure fonts with spaces have " " surrounding it.
      },

    screens: {
      '-sm' : { max: '639px'},
      // => @media (max-width: 639px) { ... }

      '-ssm' : { max: '400px' },
    }
    },
  },

  variants: {},
  plugins: [require("@tailwindcss/forms"),
  require("@tailwindcss/aspect-ratio")],
};
