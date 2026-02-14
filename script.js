const unlockBtn = document.getElementById("unlockBtn");
const letterBtn = document.getElementById("letterBtn");
const envelope = document.getElementById("envelope");

const lockScreen = document.getElementById("lockScreen");
const mainContent = document.getElementById("mainContent");
const letterScreen = document.getElementById("letterScreen");
const letter = document.getElementById("letter");
const music = document.getElementById("bgMusic");

unlockBtn.addEventListener("click", () => {
  const pass = document.getElementById("password").value;

  if (pass === "121316") {
    lockScreen.style.display = "none";
    mainContent.classList.remove("hidden");

    music.play().catch(() => {
      alert("Tap once anywhere to enable music 🎶");
    });

    startHearts();
  } else {
    alert("Wrong password 😂");
  }
});

letterBtn.addEventListener("click", () => {
  mainContent.classList.add("hidden");
  letterScreen.classList.remove("hidden");
});

envelope.addEventListener("click", () => {
  letter.classList.remove("hidden");
});

/* HEART RAIN */
function startHearts() {
  setInterval(() => {
    const heart = document.createElement("div");
    heart.innerText = "❤️";
    heart.style.position = "fixed";
    heart.style.left = Math.random() * 100 + "vw";
    heart.style.top = "-20px";
    heart.style.fontSize = "20px";
    heart.style.opacity = "0.7";
    heart.style.animation = "fall 6s linear";
    document.body.appendChild(heart);

    setTimeout(() => heart.remove(), 6000);
  }, 400);
}

const style = document.createElement("style");
style.innerHTML = `
@keyframes fall {
  to { transform: translateY(110vh); opacity: 0; }
}`;
document.head.appendChild(style);
