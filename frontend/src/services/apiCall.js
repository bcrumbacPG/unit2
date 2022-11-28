export async function getUsers() {
  const response = await fetch(`${process.env.REACT_APP_API_URL}/users/names`, {
    method: "GET",
    headers: { "Content-Type": "application/json" },
  });
  return await response.json();
}

export async function getUserCount() {
  const response = await fetch(`${process.env.REACT_APP_API_URL}/users/count`, {
    method: "GET",
    headers: { "Content-Type": "application/json" },
  });
  return await response.json();
}

export async function checkApiStatus() {
  const response = await fetch(`${process.env.REACT_APP_API_URL}/`, {
    method: "GET",
    headers: { "Content-Type": "application/json" },
  });
  return await response.status;
}
