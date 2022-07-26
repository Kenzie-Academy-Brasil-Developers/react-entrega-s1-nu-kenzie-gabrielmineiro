function TotalMoney({ lista }) {
  let array = [];
  for (let i = 0; i < lista.length; i++) {
    array.push(lista[i].valor);
  }

  let numero = [];
  for (let i = 0; i < array.length; i++) {
    let transforma = parseInt(array[i]);
    numero.push(transforma);
  }
  return (
    <div className="totalMoney">
      <p className="valorTotalMoney"> Valor Total:</p>
      <p className="precoTotalMoney">
        R$
        {numero.reduce((oldValue, currentValue) => oldValue + currentValue, 0)}
      </p>
    </div>
  );
}
export default TotalMoney;
