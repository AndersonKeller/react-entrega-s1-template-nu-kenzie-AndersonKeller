import { useState } from "react";
import "./styles.css";
export function Form({ listTransactions, setListTransactions }) {
  const [userValue, setUserValue] = useState([]);
  const [userDesc, setUserDesc] = useState([]);
  const [userType, setUserType] = useState([]);
  return (
    <div className="container-form">
      <form
        onSubmit={(event) => {
          event.preventDefault();
          console.log(userType);
          userType.length
            ? setListTransactions([
                ...listTransactions,
                { value: userValue, description: userDesc, type: userType },
              ])
            : setListTransactions([
                ...listTransactions,
                { value: userValue, description: userDesc, type: "entrada" },
              ]);
        }}
      >
        <label htmlFor="">Descrição</label>
        <input
          required
          type="text"
          id="description"
          placeholder="Descrição do gasto"
          value={userDesc}
          onChange={(event) => {
            setUserDesc(event.target.value);
          }}
        />
        <div className="div-values">
          <label htmlFor="">Valor</label>
          <input
            required
            type="text"
            id="value"
            placeholder="R$"
            value={userValue}
            onChange={(event) => {
              setUserValue(event.target.value);
            }}
          />
        </div>
        <div className="div-types">
          <label htmlFor="">Tipo de valor</label>
          <select
            name="type"
            id="type"
            onChange={(event) => {
              setUserType(event.target.value);
            }}
          >
            <option value="entrada">Entrada</option>
            <option value="saída">Saída</option>
          </select>
        </div>

        <button type="submit">Registrar</button>
      </form>
    </div>
  );
}
