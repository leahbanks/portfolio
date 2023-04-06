import './Nav.css'

export default function Nav() {
  return (
    <section className="nav">
      <ul className='nav-items' style={{ listStyle: "none" }}>
      {/* <li>About</li> */}
      <li>Projects</li>
      <li>Contact</li>
      </ul>
    </section>
  );
}
