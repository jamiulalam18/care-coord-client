/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    'node_modules/flowbite-react/lib/esm/**/*.js',
  ],
  theme: {
    extend: {
      colors: {
        light_bg: {
          DEFAULT: "#fefcfa",
        },
        light_accent: {
          DEFAULT: "#d3ce55",
        },
        light_primary_text: {
          DEFAULT: "#140c68",
        },
        light_primary_title: {
          DEFAULT: "#004aac",
        },
        light_primary_btn: {
          DEFAULT: "#d05383",
        },
        light_highlight:{
          DEFAULT: "#ffdc30"
        },

        // dark_bg: {
        //   DEFAULT: "#fefcfa",
        // },
        // dark_accent: {
        //   DEFAULT: "#d3ce55",
        // },
        // dark_primary_text: {
        //   DEFAULT: "#140c68",
        // },
        // dark_primary_title: {
        //   DEFAULT: "#004aac",
        // },
        // dark_primary_btn: {
        //   DEFAULT: "#d05383",
        // },
        // dark_highlight:{
        //   DEFAULT: "#ffdc30"
        // },
      },
    },
  },
  plugins: [require('flowbite/plugin'),require("daisyui")],
}

