import { useState } from "react";
export function Form({ listTransactions, setListTransactions }) {
  console.log(listTransactions);

  const [userValue, setUserValue] = useState([]);
  const [userDesc, setUserDesc] = useState([]);
  const [userType, setUserType] = useState([]);
  return (
    <form
      onSubmit={(event) => {
        event.preventDefault();
        setListTransactions([
          ...listTransactions,
          { value: userValue, description: userDesc, type: userType },
        ]);
      }}
    >
      <input
        type="text"
        id="value"
        placeholder="Digite o valor"
        value={userValue}
        onChange={(event) => {
          setUserValue(event.target.value);
        }}
      />
      <input
        type="text"
        id="description"
        placeholder="Descrição do gasto"
        value={userDesc}
        onChange={(event) => {
          setUserDesc(event.target.value);
        }}
      />
      <select
        name=""
        id="type"
        //value={userInput}
        onChange={(event) => {
          setUserType(event.target.value);
        }}
      >
        <option
          value="entrada"
          //onChange={(event) => setUserInput(event.target.value)}
        >
          Entrada
        </option>
        <option
          value="saída"
          //onChange={(event) => setUserInput(event.target.value)}
        >
          Saída
        </option>
      </select>

      <button
        type="submit"
        onClick={() => {
          //setListTransactions([...listTransactions], obj);
          console.log(listTransactions);
        }}
      >
        Registrar
      </button>
    </form>
  );
}
