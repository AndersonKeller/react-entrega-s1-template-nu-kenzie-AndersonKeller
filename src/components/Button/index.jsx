export function Button({ setUser }) {
  return (
    <div>
      <button onClick={() => setUser(true)}>Iniciar</button>
    </div>
  );
}
