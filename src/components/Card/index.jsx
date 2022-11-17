export function Card({ transaction }) {
  console.log(transaction);
  return (
    <ul>
      {transaction.map((trans, index) => {
        return <li key={index}>{trans}</li>;
      })}
    </ul>
  );
}
