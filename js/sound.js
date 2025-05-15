let soundOn = true;
const audio = new Audio("assets/audio/menu_theme.mp3");
audio.loop = true;
audio.volume = 0.5;

audio.addEventListener("play", () => {
  console.log("🎵 Hudba začala hrát");
});

export function startMusic() {
  if (soundOn) {
    audio.play().catch(e => {
      console.warn("🔇 Prohlížeč zablokoval autoplay. Hudba bude spuštěna až po kliknutí.");
    });
  }
}

export function toggleSound() {
  soundOn = !soundOn;
  if (soundOn) {
    audio.play().catch(e => {
      console.warn("⚠️ Nelze spustit zvuk – vyžaduje uživatelskou akci.");
    });
  } else {
    audio.pause();
    console.log("🔕 Hudba pozastavena");
  }

  const muteOverlay = document.getElementById("muteOverlay");
  if (muteOverlay) {
    muteOverlay.style.display = soundOn ? "none" : "block";
  }
}
