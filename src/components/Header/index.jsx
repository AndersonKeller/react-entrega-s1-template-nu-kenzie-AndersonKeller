import "./styles.css";
export function Header({ setUser }) {
  return (
    <header>
      <nav>
        <h2 className="title-main">
          Nu <span className="title-main">Kenzie</span>
        </h2>
        <button className="btn-header" onClick={() => setUser(false)}>
          Inicio
        </button>
      </nav>
    </header>
  );
}
