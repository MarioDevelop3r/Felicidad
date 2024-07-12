// Set the target date and time
const targetDate = new Date();
targetDate.setHours(13, 0, 0, 0); // Today at 13:00

// Update the countdown every second
const countdownElement = document.getElementById("countdown");
const interval = setInterval(updateCountdown, 1000);

function updateCountdown() {
  const now = new Date();
  const remainingTime = targetDate - now;

  if (remainingTime <= 0) {
    clearInterval(interval);
    countdownElement.textContent = "¡Loh Vimoh!";
    launchConfetti();
  } else {
    const hours = Math.floor(
      (remainingTime % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
    );
    const minutes = Math.floor(
      (remainingTime % (1000 * 60 * 60)) / (1000 * 60)
    );
    const seconds = Math.floor((remainingTime % (1000 * 60)) / 1000);

    countdownElement.textContent = `${hours}h ${minutes}m ${seconds}s`;
  }
}

function launchConfetti() {
  const duration = 5 * 1000;
  const end = Date.now() + duration;

  (function frame() {
    confetti({
      particleCount: 3,
      angle: 60,
      spread: 55,
      origin: { x: 0 },
    });
    confetti({
      particleCount: 3,
      angle: 120,
      spread: 55,
      origin: { x: 1 },
    });

    if (Date.now() < end) {
      requestAnimationFrame(frame);
    }
  })();
}
