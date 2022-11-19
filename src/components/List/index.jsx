import { Card } from "../Card";
import "./styles.css";

export function List({ list = [], listTransaction, setListTransactions }) {
  let color;
  return list.length ? (
    list.map((transaction, index) => {
      transaction.type === "entrada"
        ? (color = "#03b898")
        : (color = "#868e96");
      return (
        <Card
          key={index}
          index={index}
          transaction={transaction}
          setListTransactions={setListTransactions}
          listTransaction={listTransaction}
          colorType={color}
        />
      );
    })
  ) : (
    <>
      <h3 className="no-card-h3">Você ainda não possui nenhum lançamento</h3>
      <li className="li-noCard"></li>
      <li className="li-noCard"></li>
      <li className="li-noCard"></li>
    </>
  );
}
