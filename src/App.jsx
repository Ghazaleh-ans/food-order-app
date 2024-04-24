import { useState, useEffect } from "react";
import Header from "./components/Header";
import Menu from "./components/Menu";
import { updateUserMeals } from "./http";

function App() {
  const [isFetching, setIsFetching] = useState(false);
  const [userMeals, setUserMeals] = useState([]);
  const [error, setError] = useState();

  const [erroeUpdatingMeals, setErrorUpdatingMeals] = useState();

  async function handleSelectMeals(selectedMeal) {
    setUserMeals((prevPickedMeals) => {
      if (!prevPickedMeals) {
        prevPickedMeals = [];
      }
      if (prevPickedMeals.some((meal) => meal.id === selectedMeal.id)) {
        return prevPickedMeals;
      }
      return [selectedMeal, ...prevPickedMeals];
    });
    console.log(userMeals);
  }

  return (
    <>
      <Header />
      <Menu onSelectFood={handleSelectMeals} />
    </>
  );
}

export default App;
