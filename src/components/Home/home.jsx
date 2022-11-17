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
  // localStorage.setItem("list", JSON.stringify(listTransaction));
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
            <button
              onClick={() =>
                setListTransactions(JSON.parse(localStorage.getItem("list")))
              }
            >
              Todos
            </button>
            <button
              onClick={() => (
                <List
                  setListTransaction={setListTransactions}
                  list={setListTransactions(
                    JSON.parse(localStorage.getItem("list")).filter((el) => {
                      return el.type === "entrada";
                    })
                  )}
                />
              )}
            >
              Entradas
            </button>
            <button
              onClick={() => (
                <List
                  setListTransaction={setListTransactions}
                  list={setListTransactions(
                    JSON.parse(localStorage.getItem("list")).filter((el) => {
                      return el.type === "saída";
                    })
                  )}
                />
              )}
            >
              Saídas
            </button>
          </div>
          <ul>
            {
              <List
                list={listTransaction}
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
