document.addEventListener("DOMContentLoaded", () => {
  const card = document.getElementById("aboutCard");

  card.addEventListener("click", () => {
    card.classList.toggle("clicked");
  });
});