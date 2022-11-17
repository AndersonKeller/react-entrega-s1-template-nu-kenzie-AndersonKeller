import { Card } from "../Card";

export function List({ listTransactions }) {
  console.log(listTransactions);
  return listTransactions.map((transaction, index) => (
    <Card key={index} transaction={transaction} />
  ));
}
