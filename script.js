function unlock() {
  const pass = document.getElementById("password").value;
  if (pass === "siddhii") { // CHANGE PASSWORD HERE
    document.getElementById("lockScreen").style.display = "none";
    document.getElementById("mainContent").classList.remove("hidden");
    document.getElementById("bgMusic").play();
    startHearts();
  } else {
    alert("Wrong password 💔");
  }
}

function openLetter() {
  document.getElementById("mainContent").style.display = "none";
  document.getElementById("letterScreen").classList.remove("hidden");
}

function unfold() {
  document.querySelector(".letter").style.display = "block";
}

/* HEART RAIN */
function startHearts() {
  setInterval(() => {
    const heart = document.createElement("div");
    heart.innerHTML = "❤️";
    heart.style.position = "fixed";
    heart.style.left = Math.random() * 100 + "vw";
    heart.style.top = "-10px";
    heart.style.fontSize = "20px";
    heart.style.animation = "fall 5s linear";
    document.body.appendChild(heart);

    setTimeout(() => heart.remove(), 5000);
  }, 300);
}

const style = document.createElement("style");
style.innerHTML = `
@keyframes fall {
  to { transform: translateY(110vh); opacity: 0; }
}`;
document.head.appendChild(style);
