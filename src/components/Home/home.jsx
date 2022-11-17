import { useState } from "react";
import { Header } from "../Header";
import { Form } from "../Form";
import { TotalMoney } from "../TotalMoney";
import { List } from "../List";
import "./styles.css";

export function Home({ setUser }) {
  const [listTransaction, setListTransactions] = useState([
    { description: "Salário recebido", type: "entrada", value: 2500 },
    { description: "Conta de luz", type: "saída", value: -150 },
  ]);
  return (
    <div>
      <Header setUser={setUser} />
      <div className="container">
        <Form
          listTransactions={listTransaction}
          setListTransactions={setListTransactions}
        />
        <div className="div-ul">
          <div className="div-header">
            <h3>Resumo financeiro</h3>
            <button>Todos</button>
            <button>Entradas</button>
            <button>Saídas</button>
          </div>
          <ul>
            <List listTransactions={listTransaction} />
          </ul>
        </div>

        <TotalMoney listTransactions={listTransaction} />
      </div>
    </div>
  );
}
