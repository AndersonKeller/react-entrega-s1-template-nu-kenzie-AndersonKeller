import "./styles.css";
export function Card({ transaction }) {
  console.log(transaction);
  return (
    <li className="li-card">
      <p>{transaction.description}</p>
      <span>{transaction.value}</span>
      <button className="btn-trash"></button>
      <div className="div-type">
        <span>{transaction.type}</span>
      </div>
    </li>
  );
}
