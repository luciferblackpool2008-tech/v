const correctPassword = "121316"; // CHANGE THIS

function unlock() {
  const pass = document.getElementById("password").value;
  if (pass === correctPassword) {

    // Remove heart animation
    document.body.classList.remove("front-page");
    document.getElementById("heart-container").innerHTML = "";

    // Hide lock screen
    document.getElementById("lockScreen").style.display = "none";

    // Show content
    document.getElementById("mainContent").style.display = "block";
    document.getElementById("letterBtn").style.display = "flex";

    // Play music (works because user clicked)
    document.getElementById("bgMusic").play();

  } else {
    alert("Wrong password 💔");
  }
}

/* 💖 HEART GENERATOR (FRONT PAGE ONLY) */
function createHeart() {
  if (!document.body.classList.contains("front-page")) return;

  const heart = document.createElement("div");
  heart.className = "heart";
  heart.innerHTML = "❤️";
  heart.style.left = Math.random() * 100 + "vw";
  heart.style.animationDuration = (6 + Math.random() * 4) + "s";

  document.getElementById("heart-container").appendChild(heart);

  setTimeout(() => heart.remove(), 9000);
}

setInterval(createHeart, 300);

/* 💌 OPEN LETTER */
function openLetter() {
  document.getElementById("mainContent").style.display = "none";
  document.getElementById("letterBtn").style.display = "none";
  document.getElementById("letterPage").style.display = "block";
}
