import { Card } from "../Card";

export function List({ list, setListTransaction }) {
  
  console.log(list);
  return list.map((transaction, index) => (
    <Card
      key={index}
      transaction={transaction}
      setListTransaction={setListTransaction}
    />
  ));
}
