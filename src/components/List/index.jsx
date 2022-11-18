import { Card } from "../Card";
import "./styles.css";

export function List({ list = [] }) {
  console.log(list);
  return list.length ? (
    list.map((transaction, index) => (
      <Card key={index} transaction={transaction} />
    ))
  ) : (
    <>
      <h3>Você ainda não possui nenhum lançamento</h3>
      <li className="li-noCard"></li>
      <li className="li-noCard"></li>
      <li className="li-noCard"></li>
    </>
  );
}
