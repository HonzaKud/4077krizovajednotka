/* js/main.js */
document.addEventListener("DOMContentLoaded", () => {
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
    console.log("Kliknuto: Zvuk přepnut");
  });
});
