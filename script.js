function toggleMode() {
  const html = document.documentElement
  html.classList.toggle("light")
  //if (html.classList.contains("light")) {
  //html.classList.remove("light")
  //} else {
  //html.classList.add("light")
  //}

  //pegar a tag img
  const img = document.querySelector("#profile img")

  //se tiver light mode adicionar a imagem light
  if (html.classList.contains("light")) {
    img.setAttribute("src", "./assets/Gui dia.jpg.png")
  } else {
    img.setAttribute("src", "./assets/Gui noite.jpg.png")
  }

  //se tiver sem light mode deixar imagem que está
}
