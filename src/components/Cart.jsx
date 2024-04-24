export default function Cart({ data }) {
  console.log(data);
  return (
    <div className="cart">
      <h2>Your Cart</h2>
      <ul>
        {data.map((item) => (
          <li key={item.id} className="cart-item">
            <p>{item.name}</p>
            <div className="cart-item-actions">
              <button className="text-button">+</button>
              <p>1</p>
              <button className="text-button">-</button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
