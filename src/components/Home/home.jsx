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
  const [filterList, setFilterList] = useState([]);
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
            <button onClick={() => setFilterList([])}>Todos</button>
            <button
              onClick={() =>
                setFilterList([
                  ...listTransaction.filter((el) => el.type === "entrada"),
                ])
              }
            >
              Entradas
            </button>
            <button
              onClick={() =>
                setFilterList([
                  ...listTransaction.filter((el) => el.type === "saída"),
                ])
              }
            >
              Saídas
            </button>
          </div>
          <ul>
            {
              <List
                list={filterList.length ? filterList : listTransaction}
                setListTransaction={setListTransactions}
              />
            }
          </ul>
        </div>

        <TotalMoney listTransactions={listTransaction} />
      </div>
    </div>
  );
}
