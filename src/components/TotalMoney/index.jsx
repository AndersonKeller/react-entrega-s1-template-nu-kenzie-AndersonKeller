export function TotalMoney({ listTransactions }) {
  return listTransactions.reduce((acc, value) => {
    return acc + value;
  }, 0);
}
