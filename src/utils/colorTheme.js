const setPefersColorTheme = () => {
  const theme = localStorage.getItem("prefersColorTheme")
  if (theme === "dark") {
    document.documentElement.classList.add("dark")
  } else {
    document.documentElement.classList.remove("dark")
  }
}
export { setPefersColorTheme }
