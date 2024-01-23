const key = "e471e3b960a8403aba4d4d513d3af2f3";
const apiUrl = `https://crudcrud.com/api/${key}/users`;

async function findAll() {
  try {
    const response = await fetch(apiUrl);
    return await response.json();
  } catch (error) {
    throw error;
  }
}

async function findById(id) {
  try {
    const response = await fetch(`${apiUrl}/${id}`);
    return await response.json();
  } catch (error) {
    throw error;
  }
}

async function save(user) {
  try {
    const response = await fetch(apiUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(user),
    });
    return await response.json();
  } catch (error) {
    throw error;
  }
}

async function update(user, id) {
  try {
    await fetch(`${apiUrl}/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(user),
    });
  } catch (error) {
    throw error;
  }
}

async function remove(id) {
  try {
    await fetch(`${apiUrl}/${id}`, {
      method: "DELETE",
    });
  } catch (error) {
    throw error;
  }
}
