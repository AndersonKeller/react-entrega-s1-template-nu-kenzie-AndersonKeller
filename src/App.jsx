import logo from "./logo.svg";
import "./App.css";
import { useState } from "react";
import { Card } from "./components/Card";
import { Form } from "./components/Form";
import { List } from "./components/List";
import { TotalMoney } from "./components/TotalMoney";
function App() {
  const [listTransaction, setListTransactions] = useState();
  return (
    <div className="App">
      <header className="App-header">
        <Card />
        <Form />
      </header>
    </div>
  );
}

export default App;
