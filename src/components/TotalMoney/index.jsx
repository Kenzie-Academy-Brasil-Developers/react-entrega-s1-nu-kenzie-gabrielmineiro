function TotalMoney({ lista }) {
  let arrayPositivo = [];
  let arrayNegativo = [];
  for (let i = 0; i < lista.length; i++) {
    lista[i].tipo === "Entrada"
      ? arrayPositivo.push(lista[i].valor)
      : arrayNegativo.push(lista[i].valor);
  }

  let numeroPositivo = [];
  for (let i = 0; i < arrayPositivo.length; i++) {
    let transforma = parseInt(arrayPositivo[i]);
    numeroPositivo.push(transforma);
  }

  let numeroNegativo = [];
  for (let i = 0; i < arrayNegativo.length; i++) {
    let transforma = parseInt(arrayNegativo[i]);
    numeroNegativo.push(transforma);
  }

  let soma = numeroPositivo.reduce(
    (oldValue, currentValue) => oldValue + currentValue,
    0
  );
  let diminui = numeroNegativo.reduce(
    (oldValue, currentValue) => oldValue + currentValue,
    0
  );
  let resultado = soma - diminui;

  console.log(lista);
  return (
    <div className="totalMoney">
      <p className="valorTotalMoney"> Valor Total:</p>
      <p className="precoTotalMoney">
        R$
        {resultado}
      </p>
    </div>
  );
}
export default TotalMoney;
