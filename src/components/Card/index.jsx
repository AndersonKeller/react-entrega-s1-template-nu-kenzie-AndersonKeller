import { List } from "../List";
import "./styles.css";
export function Card({ transaction, setListTransaction }) {
  return (
    <li className="li-card">
      <p>{transaction.description}</p>
      <span>{transaction.value}</span>
      <button
        onClick={() => {
          const items = JSON.parse(localStorage.getItem("list"));
          const itemsFilter = items.filter(
            (item) =>
              item.description !== transaction.description ||
              item.value !== transaction.value ||
              item.type !== transaction.type
          );
          localStorage.setItem("list", JSON.stringify(itemsFilter));
          <List
            list={setListTransaction(JSON.parse(localStorage.getItem("list")))}
          />;
        }}
        className="btn-trash"
      ></button>
      <div className="div-type">
        <span>{transaction.type}</span>
      </div>
    </li>
  );
}
