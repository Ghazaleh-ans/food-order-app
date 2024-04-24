import logoImg from "../assets/logo.jpg";

export default function Header() {
  return (
    <>
      <header id="main-header">
        <div id="title">
          <img src={logoImg} />
          <h1>REACTFOOD</h1>
        </div>
        <button className="text-button">Cart</button>
      </header>
    </>
  );
}
