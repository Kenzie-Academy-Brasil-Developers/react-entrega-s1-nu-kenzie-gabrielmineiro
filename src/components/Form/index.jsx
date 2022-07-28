import { useState } from "react";
import TotalMoney from "../TotalMoney";

function Form({ lista, setlista }) {
  const [descriptionInput, setDescriptionInput] = useState("");
  const [valueInput, setValueInput] = useState("");
  const [tipo, setTipo] = useState("");

  function click(event) {
    event.preventDefault();

    const obj = {
      descricao: descriptionInput,
      tipo: tipo,
      valor: valueInput,
    };
    setlista([...lista, obj]);
  }
  return (
    <>
      <div>
        <form onSubmit={click}>
          <label> Descrição </label>
          <input
            type="textarea"
            placeholder="Descrição"
            value={descriptionInput}
            onChange={(event) => {
              setDescriptionInput(event.target.value);
            }}
          />
          <label> Valor </label>
          <input
            type="text"
            placeholder="Valor"
            value={valueInput}
            onChange={(event) => {
              setValueInput(event.target.value);
            }}
          />
          <label> Tipo de Valor</label>
          <select
            value={tipo}
            onChange={(event) => {
              setTipo(event.target.value);
            }}
          >
            <option>Selecione</option>
            <option>Entrada</option>
            <option>Saída</option>
          </select>
          <button>Inserir valor</button>
        </form>
      </div>
      <TotalMoney lista={lista} />
    </>
  );
}
export default Form;
