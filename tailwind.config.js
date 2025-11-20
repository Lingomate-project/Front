module.exports = {
  content: ["./app/**/*.{js,jsx,ts,tsx}", "./components/**/*.{js,jsx,ts,tsx}", "*.{js,ts,jsx,tsx,mdx}"],
  presets: [require("nativewind/preset")],
  theme: {
    extend: {
      colors: {
        border: "#d5d8e0",
        input: "#d5d8e0",
        ring: "#2c303c",
        background: "#f5f5f7",
        foreground: "#2c303c",
        primary: {
          DEFAULT: "#2c303c",
          foreground: "#ffffff",
        },
        secondary: {
          DEFAULT: "#e8eaf0",
          foreground: "#2c303c",
        },
        muted: {
          DEFAULT: "#e8eaf0",
          foreground: "#6b7280",
        },
        accent: {
          DEFAULT: "#d5d8e0",
          foreground: "#2c303c",
        },
      },
    },
  },
  plugins: [],
}
