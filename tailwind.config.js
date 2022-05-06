module.exports = {
  content: [
    // pages, components의 모든 폴더 안에 다음 확장자를 가지는 모든 파일에서 tailwindCSS를 사용할 것이다.
    "./pages/**/*.{js,jsx,ts,tsx}",
    "./components/**/*.{js,jsx,ts,tsx}"
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}
