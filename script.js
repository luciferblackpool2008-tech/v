function checkPassword() {
  const pass = document.getElementById("password").value;
  if (pass === "love") {   // change password here
    document.getElementById("lockScreen").style.display = "none";
    document.getElementById("mainContent").style.display = "block";
    document.getElementById("bgMusic").play();
  } else {
    alert("Wrong password 💔");
  }
}

