import "./App.css";
import { useState } from "react";
import { Card } from "./components/Card";
import { Form } from "./components/Form";
import { List } from "./components/List";
import { TotalMoney } from "./components/TotalMoney";
function App() {
  const [listTransaction, setListTransactions] = useState([
    { description: "Salário recebido", type: "entrada", value: 2500 },
    { description: "Conta de luz", type: "saída", value: -150 },
  ]);

  return (
    <div className="App">
      <header className="App-header">
        <Form
          listTransactions={listTransaction}
          setListTransactions={setListTransactions}
        />
      </header>
    </div>
  );
}

export default App;
