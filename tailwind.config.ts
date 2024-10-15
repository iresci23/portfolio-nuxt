import { _opacity, _transitionDelay } from "#tailwind-config/theme";

export default {
    theme: {
        fontFamily: {
            'bitter': ['"Bitter"', 'sans-serif'],
            'space-grotesk': ['"Space Grotesk"', 'sans-serif'],
            'garamond': ['Garamond', 'Times New Roman', 'serif'],
            'roboto': ['"Roboto"', 'Arial', 'sans-serif'],
        },
        animation: {
          'fade-in': 'fadeIn 1s ease-in forwards',
          'fade-out': 'fadeOut 1s ease-out forwards',
          'slide-in': 'slideIn 1s ease-in forwards',
          'slide-out': 'slideOut 1s ease-out forwards',
          'visible': 'visible 1s ease-in forwards',
          'fade-in-fast': 'fadeIn 0.5s ease-in 0.25s 1',
        },
        keyframes: {
          fadeIn: {
            from: { opacity: 0 },
            to: { opacity: 1 },
          },
          visible: {
            from: { visibility: 'hidden' },
            to: { visibility: 'visible', opacity: 1 },
          },
          fadeInDown: {
            "0%": {
                opacity: 0,
                transform: "translate3d(0, -100%, 0)",
            },
            "100%": {
                opacity: 1,
                transform: "translate3d(0, 0, 0)",
            },
        },
        },
    },
    plugins: [],
    content: [
      `./components/**/*.{vue,js,ts}`,
      `./layouts/**/*.vue`,
      `./pages/**/*.vue`,
      `./composables/**/*.{js,ts}`,
      `./plugins/**/*.{js,ts}`,
      `./utils/**/*.{js,ts}`,
      `./App.{js,ts,vue}`,
      `./app.{js,ts,vue}`,
      `./Error.{js,ts,vue}`,
      `./error.{js,ts,vue}`,
      `./app.config.{js,ts}`
    ]
  }