const findForm = document.querySelector("form");

function logIn(event) {
  event.preventDefault();
  const {
    elements: { email, password },
  } = event.currentTarget;

  if (email.value === "" || password.value === "") {
    return console.log("Please, all the fields should be fill in!");
  }

  console.log(`Email: ${email.value}, Password: ${password.value}`);
  event.currentTarget.reset();
};

findForm.addEventListener("submit", logIn);