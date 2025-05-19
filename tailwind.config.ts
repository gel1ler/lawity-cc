import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        'purp-dark': '#7B448E',
        'purp-main': '#8F4EA6',
        'black-main': '#303030',
        'light-gray': '#F5F5F5',
        'white': '#FFFFFF',
        'gray': '#B3B3B3',
        'dark-gray': '#939393',
        'black-light': '#606060',
      }
    },
  },
  plugins: [],
}
export default config