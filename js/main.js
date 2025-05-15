import { startMusic, toggleSound } from './sound.js';

let musicStarted = false;

document.addEventListener("DOMContentLoaded", () => {
  // Posloucháme jakýkoli první klik kdekoli na stránce
  document.body.addEventListener("click", () => {
    if (!musicStarted) {
      startMusic();
      musicStarted = true;
    }
  }, { once: true }); // spustí se jen jednou

  document.getElementById("newGame").addEventListener("click", () => {
    console.log("Kliknuto: Nová hra");
  });

  document.getElementById("about").addEventListener("click", () => {
    console.log("Kliknuto: O hře");
  });

  document.getElementById("exit").addEventListener("click", () => {
    console.log("Kliknuto: Konec");
  });

  document.getElementById("soundToggle").addEventListener("click", () => {
    toggleSound();
  });
});
