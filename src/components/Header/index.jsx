import "./styles.css";
export function Header({ setUser }) {
  return (
    <header>
      <nav>
        <h2>Nu Kenzie</h2>
        <button onClick={() => setUser(false)}>Inicio</button>
      </nav>
    </header>
  );
}
