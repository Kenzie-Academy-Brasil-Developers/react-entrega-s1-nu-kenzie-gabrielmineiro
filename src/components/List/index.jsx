function List({ lista }) {
  return (
    <ul>
      {lista.map((transaction, index) => (
        <li key={index}>
          <p id="descricao">{transaction.descricao}</p>
          <p id="tipo">{transaction.tipo}</p>
          <p id="valor">{transaction.valor}</p>
        </li>
      ))}
    </ul>
  );
}
export default List;
