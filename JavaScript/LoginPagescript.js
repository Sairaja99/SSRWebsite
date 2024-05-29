const container = document.getElementById("LoginContainer"); // Change Container to container
const registerBtn = document.getElementById("register");
const loginBtn = document.getElementById("login");

registerBtn.addEventListener("click", () => {
  container.classList.add("active");
});

loginBtn.addEventListener("click", () => {
  container.classList.remove("active");
});

function handleSignIn(event) {
  event.preventDefault(); // Prevents the default form submission behavior

  // Perform any additional validation or processing here

  // Redirect to FirstPage.html
  window.location.href = '../HtmlOne/FirstPage.html';
}
