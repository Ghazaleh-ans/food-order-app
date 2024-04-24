import { useState } from "react";
import logoImg from "../assets/logo.jpg";
import Modal from "./Modal";
import Cart from "./Cart";

export default function Header({ cartData }) {
  const [modalIsOpen, setModalIsOpen] = useState(false);

  function handleCartOpen() {
    setModalIsOpen(true);
  }

  function handleCloseCart() {
    setModalIsOpen(false);
  }

  return (
    <>
      <header id="main-header">
        <div id="title">
          <img src={logoImg} />
          <h1>REACTFOOD</h1>
        </div>
        <button className="text-button" onClick={handleCartOpen}>
          Cart
        </button>
        <Modal open={modalIsOpen} onClose={handleCloseCart}>
          <Cart data={cartData} />
          <div className="modal-actions">
            <button className="text-button" onClick={handleCloseCart}>
              Close
            </button>
            <button className="button">Go to Checkout</button>
          </div>
        </Modal>
      </header>
    </>
  );
}
