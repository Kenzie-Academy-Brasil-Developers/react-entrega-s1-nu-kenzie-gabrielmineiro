function List({ lista }) {
  return (
    <div className="divLista">
      <div className="filtro">
        <p>Resumo Financeiro</p>
        <button className="todos"> Todos</button>
        <button className="entradas">Entradas</button>
        <button className="saidas">Saídas</button>
      </div>
      <ul>
        {lista.map((transaction, index) =>
          transaction.tipo === "Saída" ? (
            <li key={index}>
              <img src="https://i.ibb.co/VjJ6CRL/Rectanglegray-57.png" alt="" />
              <div className="liContainer">
                <section className="descricaoTipo">
                  <p className="descricao">{transaction.descricao}</p>
                  <p className="tipo">{transaction.tipo}</p>
                </section>
                <p className="valor">{transaction.valor}</p>
                <button>
                  <img src="https://i.ibb.co/vq82S24/trash.png" alt="" />
                </button>
              </div>
            </li>
          ) : transaction.tipo === "Entrada" ? (
            <li key={index}>
              <img src="https://i.ibb.co/zhJ7d7b/Rectangle57.png" alt="" />
              <div className="liContainer">
                <section className="descricaoTipo">
                  <p className="descricao">{transaction.descricao}</p>
                  <p className="tipo">{transaction.tipo}</p>
                </section>
                <p className="valor">{transaction.valor}</p>

                <button>
                  <img src="https://i.ibb.co/vq82S24/trash.png" alt="" />
                </button>
              </div>
            </li>
          ) : (
            alert("Selecione uma categoria")
          )
        )}
      </ul>
    </div>
  );
}
export default List;
