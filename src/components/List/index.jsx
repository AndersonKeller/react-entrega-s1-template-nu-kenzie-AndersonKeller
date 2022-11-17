import { Card } from "../Card";

export function List({ list }) {
  console.log(list);
  return list.map((transaction, index) => (
    <Card key={index} transaction={transaction} />
  ));
}
