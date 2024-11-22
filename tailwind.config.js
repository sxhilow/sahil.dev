/** @type {import('tailwindcss').Config} */

export default {
  content: [
      "./index.html",
      "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        poppins: ['Poppins', 'sans-serif'],
      },
      backgroundImage: {
        'onepiece-image': 'url("/assets/images/onepiece.jpeg")',
      },
      
    },
  },
  plugins: [
    require('daisyui'),
  ],
  daisyui: {
    themes: [
      {
        mydarktheme: {
          // Only modify the background color for dark mode
          "base-100": "#0f172a", // Dark background color
        },
      },
    ],
    darkTheme: "mydarktheme", // Use this custom dark theme
  },
}

