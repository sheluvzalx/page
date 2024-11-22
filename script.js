document.addEventListener("mousemove", (event) => {
  const x = event.clientX / window.innerWidth;
  const y = event.clientY / window.innerHeight;

  const background = document.getElementById("FONDO AQUI");
  background.style.transform = `translate(-${x * 50}px, -${y * 50}px)`;
});