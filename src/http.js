export async function fetchAvailableMeals() {
  const response = await fetch("http://localhost:3000/meals");
  const resData = await response.json();

  if (!response.ok) {
    throw new Error("Failed to fetch places");
  }
  return resData;
}

export async function updateUserMeals(meals) {
  const response = await fetch("http://localhost:3000/orders", {
    method: "POST",
    body: JSON.stringify({ meals }),
    headers: {
      "Content-Type": "application/json",
    },
  });
  const resData = await response.json();
  if (!response.ok) {
    throw new Error("Failed to update user data.");
  }
  return resData;
}
