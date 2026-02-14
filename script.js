const correctPassword = "121316";

/* 🔓 UNLOCK */
function unlock() {
  const pass = document.getElementById("password").value;
  if (pass === correctPassword) {

    document.body.classList.remove("front-page");
    document.getElementById("heart-container").innerHTML = "";

    document.getElementById("lockScreen").style.display = "none";
    document.getElementById("mainContent").style.display = "block";
    document.getElementById("letterBtn").style.display = "flex";

    document.getElementById("bgMusic").play();
  } else {
    alert("Wrong password 💔");
  }
}

/* ❤️ HEARTS */
function createHeart() {
  if (!document.body.classList.contains("front-page")) return;
  const heart = document.createElement("div");
  heart.className = "heart";
  heart.innerHTML = "❤️";
  heart.style.left = Math.random() * 100 + "vw";
  document.getElementById("heart-container").appendChild(heart);
  setTimeout(() => heart.remove(), 9000);
}
setInterval(createHeart, 300);

/* 💌 OPEN LETTER PAGE */
function openLetter() {
  document.getElementById("mainContent").style.display = "none";
  document.getElementById("letterBtn").style.display = "none";
  document.getElementById("letterPage").style.display = "block";
}

/* 🌹 ROSES + ENVELOPE */
function openEnvelope() {
  document.querySelector(".envelope").classList.add("open");

  setTimeout(() => {
    document.querySelector(".envelope-container").style.display = "none";
    document.getElementById("letter").classList.remove("hidden");
    startRoses();
  }, 1000);
}

function startRoses() {
  setInterval(() => {
    const rose = document.createElement("div");
    rose.className = "rose";
    rose.innerHTML = "🌹";
    rose.style.left = Math.random() * 100 + "vw";
    document.body.appendChild(rose);
    setTimeout(() => rose.remove(), 12000);
  }, 400);
}
