// ATIVIDADE 1
const form = document.querySelector("form");
const inputs = document.querySelectorAll("input");

let users = [];

createDatabase();

validateFields();

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

    saveUser(payload);
  }
});

function validateFormOnSubmit() {
  let hasError = false;
  console.log(inputs);
  inputs.forEach((field) => {
    if (!field.value) {
      showErrorMessage(field)
      hasError = true;
    } else {
      hideErrorMessage(field)
    }
  });

  return hasError;
}

// ATIVIDADE 2

function validateFields() {
  inputs.forEach(input => {
    input.addEventListener("blur", () => {
      if (!input.value) {
        showErrorMessage(input)
      } else {
        hideErrorMessage(input)
      }
    })

    input.addEventListener("keydown", () => {
      if (!input.value && input.value !== "") {
        showErrorMessage(input)
      } else {
        hideErrorMessage(input)
      }
    })

    switch (input.id) {
      case "name":
      case "surname":
      case "profession":
        if (input.value.length < 2) {
          input.nextElementSibling.innerText =
            "O campo precisa ter, ao menos, 2 caracteres.";
          showErrorMessage(input);
        }
        break;

      case "birthDate":
        compareDates(input);
        break;

      case "documentNumber":
        if (input.value.length != 11) {
          input.nextElementSibling.innerText =
            "O campo precisa ter 11 caracteres.";
          showErrorMessage(input);
        }
        break;

      case "password":
        if (input.value.length < 8) {
          input.nextElementSibling.innerText =
            "O campo precisa ter, ao menos, 8 caracteres.";
          showErrorMessage(input);
        }
        break;

      case "phone":
        if (input.value.length < 10 || input.value.length > 11) {
          input.nextElementSibling.innerText =
            "O campo precisa ter entre 10 e 11 caracteres.";
          showErrorMessage(input);
        }
        break;

      default:
        break;
    }
  })
}

function showErrorMessage(field) {
  field.nextElementSibling.classList.add("d-block");
  field.nextElementSibling.classList.remove("d-none");
}

function hideErrorMessage(field) {
  field.nextElementSibling.classList.add("d-none");
  field.nextElementSibling.classList.remove("d-block");
}

function compareDates(input) {
  const birthDate = new Date(input.value + "T00:00:00").setHours(0, 0, 0, 0);
  const today = new Date().setHours(0, 0, 0, 0);
  if (birthDate >= today) {
    input.nextElementSibling.innerText =
      "A data de nascimento precisa ser menor que a data atual.";
    showErrorMessage(input);
  }
}

function saveUser(user) {
  // getUsers();
  // users.push(user);
  // localStorage.setItem("USERS", JSON.stringify(users));

  const request = indexedDB.open("database", 1);

  request.onsuccess = function (event) {
    const db = event.target.result;

    const transaction = db.transaction(["users"], "readwrite");
    const objectStore = transaction.objectStore("users");

    console.log(user);
    const requestAdd = objectStore.add(user);

    requestAdd.onsuccess = function () {
      window.location.href = "./usuarios.html";
    };

    requestAdd.onerror = function () {
      console.log("Houve um erro!", event.target.error);
    };
  };

  request.onerror = function (event) {};
}

function getUsers() {
  users = JSON.parse(localStorage.getItem("USERS") || "[]");
}

function createDatabase() {
  const request = indexedDB.open("database", 1);

  request.onsuccess = function (event) {
    const db = event.target.result;
    console.log("Banco de dados aberto com sucesso!", db);
  };

  request.onerror = function (event) {
    console.log("Erro ao abrir o banco de dados!", event.target.error);
  };

  request.onupgradeneeded = function (event) {
    const db = event.target.result;

    const objectStore = db.createObjectStore("users", {
      keyPath: "id",
      autoIncrement: true,
    });
  };
}