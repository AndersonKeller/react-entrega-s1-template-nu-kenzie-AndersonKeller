import "./styles.css";
export function TotalMoney({ listTransactions }) {
  console.log(listTransactions);
  function sumValues(listTransactions) {
    return listTransactions.reduce((acc, value) => {
      return acc + Number(value.value);
    }, 0);
  }
  return (
    <div className="total-container">
      <h3>Valor Total</h3>
      <p>{sumValues(listTransactions)}</p>
      <p>O valor se refere ao saldo</p>
    </div>
  );
}
