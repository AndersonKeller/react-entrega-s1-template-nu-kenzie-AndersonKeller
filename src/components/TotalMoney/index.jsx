import "./styles.css";
export function TotalMoney({ listTransactions }) {
  console.log(listTransactions);
  const filterList = listTransactions.map((trans) => {
    return trans.type === "saída" ? trans.value - 2 * trans.value : trans.value;
  });
  console.log(filterList);

  function sumValues(list) {
    return list.reduce((acc, value) => {
      return acc + Number(value);
    }, 0);
  }
  return (
    <div className="total-container">
      <h3>Valor Total:</h3>
      <p className="p-total">$ {sumValues(filterList)}</p>
      <p>O valor se refere ao saldo</p>
    </div>
  );
}
