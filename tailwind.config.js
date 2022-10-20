module.exports = {
  content: [
    './components/**/*.{js,vue,ts}',
    './layouts/**/*.vue',
    './pages/**/*.vue',
    './plugins/**/*.{js,ts}',
    './nuxt.config.{js,ts}',
  ],
  theme: {
    extend: {
      screens: {
        md: { min: '769px' },
        'max-sm': { max: '639px' },
        'max-md': { max: '768px' },
        'sm-range': { min: '640px', max: '768px' },
        // => @media (min-width: 640px and max-width: 767px) { ... }

        'md-range': { min: '769px', max: '1023px' },
        // => @media (min-width: 768px and max-width: 1023px) { ... }

        'lg-range': { min: '1024px', max: '1279px' },
        // => @media (min-width: 1024px and max-width: 1279px) { ... }

        'xl-range': { min: '1280px', max: '1535px' },
        // => @media (min-width: 1280px and max-width: 1535px) { ... }

        '2xl-range': { min: '1536px' },
      },
      fontFamily: {
        Hiramaru: ['Hiramaru'],
        Nikumaru: ['Nikumaru'],
        NotoSansJP: ['NotoSansJP'],
      },
    },
    plugins: [],
  },
}
