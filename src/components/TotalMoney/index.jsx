function TotalMoney({ lista }) {
  let array = [1, 2, 4];
  for (let i = 0; i < lista.length; i++) {
    array.push(lista[i].valor);
  }

  let numero = [];
  for (let i = 0; i < array.length; i++) {
    let transforma = parseInt(array[i]);
    numero.push(transforma);
  }
  return (
    <div>
      {numero.reduce((oldValue, currentValue) => oldValue + currentValue, 0)}
    </div>
  );
}
export default TotalMoney;
