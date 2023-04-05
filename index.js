function generatePassword(length) {
  var charset = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
  var password = "";
  for (var i = 0; i < length; i++) {
    password += charset.charAt(Math.floor(Math.random() * charset.length));
  }
  return password;
}

function generateAndDisplayPassword() {
  var passwordInput = document.getElementById("passwordInput");
  var password = generatePassword(12);
  passwordInput.value = password;
}

function copyPassword() {
  var passwordInput = document.getElementById("passwordInput");
  var text = passwordInput.value;
  passwordInput.select();
  navigator.clipboard.writeText(text);
  if(text === ''){
    alert("Click on generate first")
  }
  else{
    passwordInput.value = "Copied!";
  }

  setTimeout(function() {
    passwordInput.value = text;
  }, 2000);
}

document.querySelectorAll(".copy-link").forEach(copyLinkContainer => {
  const inputField = copyLinkContainer.querySelector(".form-control");
  const copyButton = copyLinkContainer.querySelector(".copy-link-button");

  inputField.addEventListener("focus",() => inputField.select());
  copyButton.addEventListener("click", copyPassword);
});
