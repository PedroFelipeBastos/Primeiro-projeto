function togglemode() {
  const html = document.documentElement
  html.classList.toggle("light")

  const img = document.querySelector("#profile img")
  if (html.classList.contains("light")) {
    img.setAttribute("src", "./assets/elipse-guaxinim.jpg")
    img.setAttribute("alt", "Guaxinim bravo, porque está de dia")
  } else {
    img.setAttribute("src", "./assets/Elipse.png")
    img.setAttribute("alt", "Foto de guaxinim obeso, representa Pedro Felipe.")
  }
}
