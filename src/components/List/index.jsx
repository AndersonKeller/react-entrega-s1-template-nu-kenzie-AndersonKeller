import { Card } from "../Card";

export function List({ listTransactions }) {
  return listTransactions.map((transaction, index) => (
    <Card key={index} transaction={transaction} />
  ));
}
