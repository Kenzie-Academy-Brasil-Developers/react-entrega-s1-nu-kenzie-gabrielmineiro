import TotalMoney from "../TotalMoney";

function Form({ lista, setlista }) {
  function click(event) {
    event.preventDefault();
    const valor = document.getElementById("valor");
    const descricao = document.getElementById("descricao");
    const tipo = document.getElementById("tipo");

    const obj = {
      descricao: descricao.value,
      tipo: tipo.value,
      valor: valor.value,
    };
    setlista([...lista, obj]);
  }
  return (
    <>
      <div>
        <form>
          <label> Descrição </label>
          <input type="textarea" placeholder="Descrição" id="descricao" />
          <label> Valor </label>
          <input type="text" placeholder="Valor" id="valor" />
          <label> Tipo de Valor</label>
          <select id="tipo">
            <option>Entrada</option>
            <option>Saída</option>
          </select>
          <button onClick={click}>Inserir valor</button>
        </form>
      </div>
      <TotalMoney lista={lista} />
    </>
  );
}
export default Form;
