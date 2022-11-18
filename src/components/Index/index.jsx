import "./styles.css";
export function Index({ user, setUser }) {
  return (
    <div className="App-header">
      <section className="section-menu">
        <h1 className="title-main">
          Nu <small className="title-main">Kenzie</small>
        </h1>
        <h2 className="title-section">
          Centralize o controle das suas finanças
        </h2>
        <p>de forma rápida e segura</p>
        <button className="btn-index" onClick={() => setUser(true)}>
          Iniciar
        </button>
      </section>
      <section className="section-img"></section>
      {console.log(user)}
    </div>
  );
}
