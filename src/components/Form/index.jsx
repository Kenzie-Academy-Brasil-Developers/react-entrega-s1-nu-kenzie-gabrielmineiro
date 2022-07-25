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
    console.log(lista);
  }
  return (
    <div>
      <form>
        <input type="textarea" placeholder="Descrição" id="descricao" />
        <input type="text" placeholder="Valor" id="valor" />
        <select id="tipo">
          <option>Selecione uma opção</option>
          <option>Saída</option>
          <option>Entrada</option>
        </select>
        <button onClick={click}>Enviar</button>
      </form>
    </div>
  );
}
export default Form;
