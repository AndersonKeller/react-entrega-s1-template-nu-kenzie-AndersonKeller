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
  const [typeIn, setTypeIn] = useState([]);
  const [typeOut, setTypeOut] = useState([]);

  function filterIn([...list]) {
    const res = list.filter((trans) => {
      return trans.type === "entrada";
    });
    setTypeIn(res);
    return typeIn;
  }

  function filterOut(list) {
    const res = list.filter((trans) => {
      return trans.type === "saída";
    });
    setTypeOut(res);
    return typeOut;
  }
  console.log(typeIn);
  console.log(typeOut);
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
          <ul>{<List list={listTransaction} />}</ul>
        </div>

        <TotalMoney listTransactions={listTransaction} />
      </div>
    </div>
  );
}
