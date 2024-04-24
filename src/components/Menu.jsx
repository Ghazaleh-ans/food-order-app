import { useState, useEffect } from "react";
import Foods from "./Foods";
import { fetchAvailableFoods } from "../http";

export default function Menu({ onSelectFood }) {
  const [isFetching, setIsFetching] = useState(false);
  const [availableMeals, setAvailableMeals] = useState([]);
  const [error, setError] = useState();

  useEffect(() => {
    setIsFetching(true);
    async function fetchFoods() {
      try {
        const foods = await fetchAvailableFoods();
        setAvailableMeals(foods);
        setIsFetching(false);
      } catch (error) {
        setError({
          message:
            error.message || "Could not fetch meals, please try again later.",
        });
      }
    }
    fetchFoods();
  }, []);

  return (
    <>
      <Foods
        foods={availableMeals}
        isloading={isFetching}
        loadingText="Fetching meal data..."
        fallbackText="No meal available."
        onSelectFood={onSelectFood}
      />
    </>
  );
}
