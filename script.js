let user = document.getElementById("username");
let pass = document.getElementById("password");
let check = document.getElementById("checkbox");
let btn = document.getElementById("submit");
let existing = document.getElementById("existing");

// show existing user button if data exists
if (localStorage.getItem("user")) {
  existing.style.display = "block";
}

btn.addEventListener("click", () => {
  alert(`Logged in as ${user.value}`);

  if (check.checked) {
    localStorage.setItem("user", user.value);
    localStorage.setItem("pass", pass.value);
    existing.style.display = "block";
  } else {
    localStorage.removeItem("user");
    localStorage.removeItem("pass");
    existing.style.display = "none";
  }
});

existing.addEventListener("click", () => {
  alert(`Logged in as ${localStorage.getItem("user")}`);
});
