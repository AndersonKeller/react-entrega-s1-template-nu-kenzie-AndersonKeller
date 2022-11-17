import { useState } from "react";
import "./styles.css";
export function Form({ listTransactions, setListTransactions }) {
  console.log(listTransactions);

  const [userValue, setUserValue] = useState([]);
  const [userDesc, setUserDesc] = useState([]);
  const [userType, setUserType] = useState([]);
  return (
    <div className="container-form">
      <form
        onSubmit={(event) => {
          event.preventDefault();
          setListTransactions([
            ...listTransactions,
            { value: userValue, description: userDesc, type: userType },
          ]);
        }}
      >
        <label htmlFor="">Descrição</label>
        <input
          type="text"
          id="description"
          placeholder="Descrição do gasto"
          value={userDesc}
          onChange={(event) => {
            setUserDesc(event.target.value);
          }}
        />
        <label htmlFor="">Valor</label>
        <input
          type="text"
          id="value"
          placeholder="Digite o valor"
          value={userValue}
          onChange={(event) => {
            setUserValue(event.target.value);
          }}
        />
        <label htmlFor="">Tipo de valor</label>
        <select
          name=""
          id="type"
          onChange={(event) => {
            setUserType(event.target.value);
          }}
        >
          <option value="entrada">Entrada</option>
          <option value="saída">Saída</option>
        </select>

        <button
          type="submit"
          onClick={() => {
            console.log(listTransactions);
          }}
        >
          Registrar
        </button>
      </form>
    </div>
  );
}
