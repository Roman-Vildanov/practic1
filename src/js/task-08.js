const form = document.querySelector(".login-form");

const handleSubmit = (e) => {
  e.preventDefault();
  const {
    elements: { email, password }
  } = e.currentTarget;

  if (email.value === "" || password.value === "") {
    return alert("Please fill in all the fields!");
  }

  console.log(`E-mail: ${email.value}, Password: ${password.value}`);
  e.currentTarget.reset();
}

form.addEventListener("submit", handleSubmit);

