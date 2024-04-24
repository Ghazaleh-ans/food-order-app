export default function Foods({
  foods,
  fallbackText,
  onSelectFood,
  isloading,
  loadingText,
}) {
  return (
    <div id="meals">
      {isloading && <p>{loadingText}</p>}
      {!isloading && foods.length === 0 && <p>{fallbackText}</p>}
      {foods.map((food) => (
        <div key={food.id} className="meal-item">
          <article>
            <img
              src={`http://localhost:3000/${food.image}`}
              alt={`photo of ${food.name}`}
            />
            <h3>{food.name}</h3>
            <div className="meal-item-description">
              <p className="meal-item-price">${food.price}</p>
              <p>{food.description}</p>
            </div>
            <div className="meal-item-actions">
              <button onClick={() => onSelectFood(food)} className="button">
                Add to Card
              </button>
            </div>
          </article>
        </div>
      ))}
    </div>
  );
}
