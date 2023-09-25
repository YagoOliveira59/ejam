/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    screens: {
      'small': '300px',
      'normal': '1200px',
    },
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      height: {
        '1.5': '6px',
        '10.2': '42px',
        '12.2': '50px',
        '60': '60px',
        '88': '88px',
        '70': '70px',
        '102': '102px',
      },
      width: {
        '1.5': '6px',
        '542': '542px',
        '1500': '1500px',

      },
      maxWidth: {
        '1500': '1500px',
      },
      padding: {
        '15': '15px',
      },
      fontSize: {
        '10': '10px',
        '32': '32px',
      },
      borderRadius: {
        '10': '10px', 
        '50': '50px', 
      },
      margin: {
        '50': '50px', 
        '128': '128px', 
      },
      colors: {
        'blue-2': "#2C7EF8",
        'blue-hf': "#252F3D",
        'gray-ej': "#4D5254",
        'claim': "#59AE43"
      },
      gap: {
        '10': '10px',
        '18': '18px',
      },
      borderWidth: {
        '1': '1px',
      }
    },
  },
  plugins: [],
}
