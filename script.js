// Elementos
const musicBtn = document.getElementById("music-btn");
const musicOverlay = document.getElementById("music-overlay");
const ytPlayer = document.getElementById("yt-player");
const backBtn = document.getElementById("back-btn");

// Ao clicar no botão de música
musicBtn.addEventListener("click", () => {
  // Mostra o overlay com o player
  musicOverlay.style.display = "flex";

  // Carrega o vídeo do YouTube com autoplay
  ytPlayer.src = "https://www.youtube.com/embed/ZZ0cTl8umGU?autoplay=1&loop=1&playlist=ZZ0cTl8umGU&controls=1&modestbranding=1";
});

// Botão de voltar
backBtn.addEventListener("click", () => {
  // Oculta o overlay e para o vídeo
  musicOverlay.style.display = "none";
  ytPlayer.src = ""; // limpa o vídeo para parar a reprodução
});
