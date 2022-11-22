const arguments = process.argv

function pointParking(name) {
  return `на стоянці "${name}":`;
}

function countFreeTaxi(count) {
  return ` вільних авто: "${count}",`;
}

function numberTaxisGo(count) {
  return ` авто що прибувають протягом 5 хвилин: "${count}",`;
}

function pointCarGo(count) {
  return ` авто що поїхали з точки: "${count}". `;
}

function associationAllParametr(nameParkingPoint, countFreeAuto, countTaxisGo, countLeavePoint) {
  const name = pointParking(nameParkingPoint);
  const free = countFreeTaxi(countFreeAuto);
  const number = numberTaxisGo(countTaxisGo);
  const point = pointCarGo(countLeavePoint);
  const text = `Отримані данні показують що`;

  let strResultOrderOnTaxi = `То ж замовлення не може бути, опрацьованно.`;
  if (countFreeAuto > 0) {
    strResultOrderOnTaxi = `То ж замовлення може бути, опрацьованно.`;
  } else if (countFreeAuto === 0 && countTaxisGo > 0) {
    strResultOrderOnTaxi = `То ж замовлення може бути, опрацьованно протягом 5 хвилин.`;
  }
  return `${text} ${name}${free}${number}${point}${strResultOrderOnTaxi}`
}

console.log(associationAllParametr(arguments[2], parseInt(arguments[3]), parseInt(arguments[4]), parseInt(arguments[5])));
