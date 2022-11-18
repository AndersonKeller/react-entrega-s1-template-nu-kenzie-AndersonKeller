import "./styles.css";
export function TotalMoney({ listTransactions }) {
  function sumValues(listTransactions) {
    return listTransactions.reduce((acc, value) => {
      return acc + Number(value.value);
    }, 0);
  }
  return (
    <div className="total-container">
      <h3>Valor Total:</h3>
      <p className="p-total">$ {sumValues(listTransactions)}</p>
      <p>O valor se refere ao saldo</p>
    </div>
  );
}
