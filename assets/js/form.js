const videoSection = document.querySelector(".form_UE_L221 .row");

// Création du bouton 1
const btn1 = document.createElement("button");
btn1.textContent = "Découvrez nos services";
btn1.classList.add("video-btn");

videoSection.appendChild(btn1);

let video;
let btn2;

// Au clic sur le bouton 1
btn1.addEventListener("click", () => {
  // Création de la vidéo
  video = document.createElement("video");
  video.src = "https://www.w3schools.com/html/mov_bbb.mp4";
  video.controls = true;
  video.classList.add("animated-video");

  // Création du bouton 2
  btn2 = document.createElement("button");
  btn2.textContent = "Fermer la vidéo";
  btn2.classList.add("video-btn");

  // Affichage vidéo + bouton 2
  videoSection.appendChild(video);
  videoSection.appendChild(btn2);

  setTimeout(() => {
    video.classList.add("show");
  }, 20);

  // Masquer btn1
  btn1.style.display = "none";
});

// Au clic sur le bouton 2
document.addEventListener("click", (e) => {
  if (e.target === btn2) {
    video.remove();
    btn2.remove();
    btn1.style.display = "inline-block";
  }
});
