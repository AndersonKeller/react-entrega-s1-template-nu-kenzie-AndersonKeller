import "./styles.css";
export function Card({
  transaction,
  index,
  listTransaction = [],
  setListTransactions,
}) {
  return (
    <li className="li-card">
      <p>{transaction.description}</p>
      <span>R$ {transaction.value}</span>
      <button
        className="btn-trash"
        onClick={(event) => {
          setListTransactions(
            listTransaction.filter((el) => {
              console.log(el.id);
              console.log(transaction.id);
              return el.id !== transaction.id && el;
              // if (el.id !== transaction.id) {
              //   return el;
              // } else {
              //   return "";
              // }
            })
          );
          console.log(listTransaction);
        }}
      ></button>
      <div className="div-type">
        <span>{transaction.type}</span>
      </div>
    </li>
  );
}
