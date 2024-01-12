// ATIVIDADE 1
const form = document.querySelector("form");
console.log(form);

form.addEventListener("submit", (event) => {
  event.preventDefault();

  const hasError = validateFields();

  if (!hasError) {
    const name = document.getElementById("name").value;
    const surname = document.getElementById("surname").value;
    const birthDate = document.getElementById("birthDate").value;
    const profession = document.getElementById("profession").value;
    const documentNumber = document.getElementById("documentNumber").value;
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
    const phone = document.getElementById("phone").value;
    const address = document.getElementById("address").value;

    const payload = {
      name,
      surname,
      birthDate,
      profession,
      documentNumber,
      email,
      password,
      phone,
      address,
    };

    console.log(payload);
  }
});

function validateFields() {
  let hasError = false;
  const inputs = document.querySelectorAll("input");
  console.log(inputs);
  inputs.forEach((field) => {
    if (!field.value) {
      field.nextElementSibling.classList.add("d-block");
      field.nextElementSibling.classList.remove("d-none");
      hasError = true;
    } else {
      field.nextElementSibling.classList.add("d-none");
      field.nextElementSibling.classList.remove("d-block");
    }
  });

  return hasError;
}

// ATIVIDADE 2

function validateFieldFocus() {
  const inputs = document.querySelectorAll("input");
  inputs.forEach(input => {
    input.addEventListener("blur", () => {
      if (!input.value) {
        showFieldMessage(input)
      } else {
        removeFieldMessage(input)
      }
    })
  
    input.addEventListener("keydown", () => {
      if (!input.value && input.value !== "") {
        showFieldMessage(input)
      } else {
        removeFieldMessage(input)
      }
    })
  })
}

function showFieldMessage(field) {
  field.nextElementSibling.classList.add("d-block");
  field.nextElementSibling.classList.remove("d-none");
}

function removeFieldMessage(field) {
  field.nextElementSibling.classList.add("d-none");
  field.nextElementSibling.classList.remove("d-block");
}

validateFieldFocus();