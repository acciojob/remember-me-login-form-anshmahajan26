let user = document.getElementById("username");
let pass = document.getElementById("password");
let check = document.getElementById("checkbox");
let form = document.getElementById("form");
let existing = document.getElementById("existing");

// show existing user if data present
if (localStorage.getItem("username") && localStorage.getItem("password")) {
  existing.style.display = "block";
}

form.addEventListener("submit", (e) => {
  e.preventDefault();

  alert(`Logged in as ${user.value}`);

  if (check.checked) {
    localStorage.setItem("username", user.value);
    localStorage.setItem("password", pass.value);
    existing.style.display = "block";
  } else {
    localStorage.removeItem("username");
    localStorage.removeItem("password");
    existing.style.display = "none";
  }
});

existing.addEventListener("click", () => {
  alert(`Logged in as ${localStorage.getItem("username")}`);
});
