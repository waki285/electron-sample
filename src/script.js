document.getElementById("play").addEventListener("click", (ev) => {
  ev.preventDefault();
  const audio = new Audio("./public/deden.mp3");
  audio.play();
});