import { Card } from "../Card";
import "./styles.css";

export function List({ list = [], listTransaction, setListTransactions }) {
  return list.length ? (
    list.map((transaction, index) => (
      <Card
        key={index}
        index={index}
        transaction={transaction}
        setListTransactions={setListTransactions}
        listTransaction={listTransaction}
      />
    ))
  ) : (
    <>
      <h3 className="no-card-h3">Você ainda não possui nenhum lançamento</h3>
      <li className="li-noCard"></li>
      <li className="li-noCard"></li>
      <li className="li-noCard"></li>
    </>
  );
}
