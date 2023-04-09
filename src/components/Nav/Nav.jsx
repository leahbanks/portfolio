import "./Nav.css";

export default function Nav({
  handleAboutClickScroll,
  handleClickScroll,
  handleProjectClickScroll,
}) {
  return (
    <section className="nav">
      <ul className="nav-items">
        <button onClick={handleAboutClickScroll}>About</button>
        <button onClick={handleProjectClickScroll}>Projects</button>
        <button onClick={handleClickScroll}>Contact</button>
      </ul>
    </section>
  );
}
