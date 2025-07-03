import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        background: 'var(--background)',
        foreground: 'var(--foreground)',
      },
      fontFamily: {
        'pretendard-regular': ['Pretendard-Regular', 'sans-serif'],
        'pretendard-bold': ['Pretendard-Bold', 'sans-serif'],
        'pretendard-semibold': ['Pretendard-SemiBold', 'sans-serif'],
        'pretendard-extrabold': ['Pretendard-ExtraBold', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
export default config;
