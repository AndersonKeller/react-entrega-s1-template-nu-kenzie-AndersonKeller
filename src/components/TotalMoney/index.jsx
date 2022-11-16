export function TotalMoney({ listTransactions }) {
  return listTransactions.reduce((acc, value) => acc + value);
}
