/** @type {import('tailwindcss').Config} */

export default {
  content: [
      "./index.html",
      "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        poppins: ['Poppins', 'sans-serif'],
      },
      backgroundImage: {
        'onepiece-image': 'url("./src/assets/images/onepiece.jpeg")',
      },
    },
  },
  plugins: [],
}

