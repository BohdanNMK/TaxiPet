const arguments = process.argv

function getTextPointParking(name) {
  return `на стоянці "${name}":`;
}

function getTextFreeTaxi(count) {
  return ` вільних авто: "${count}",`;
}

function getTextTaxisArriving(count) {
  return ` авто що прибувають протягом 5 хвилин: "${count}",`;
}

function getTextTaxiLeavePoint(count) {
  return ` авто що поїхали з точки: "${count}". `;
}

function associationAllParametr(nameParkingPoint, countFreeAuto, countTaxiArriving, countLeavePoint) {
  const strName = getTextPointParking(nameParkingPoint);
  const strFree = getTextFreeTaxi(countFreeAuto);
  const strNumber = getTextTaxisArriving(countTaxiArriving);
  const strLeave = getTextTaxiLeavePoint(countLeavePoint);
  const text = `Отримані данні показують що`;

  let strResultOrderOnTaxi = `То ж замовлення не може бути, опрацьованно.`;
  if (countFreeAuto > 0) {
    strResultOrderOnTaxi = `То ж замовлення може бути, опрацьованно.`;
  } else if (countFreeAuto === 0 && countTaxiArriving > 0) {
    strResultOrderOnTaxi = `То ж замовлення може бути, опрацьованно протягом 5 хвилин.`;
  }
  return `${text} ${strName}${strFree}${strNumber}${strLeave}${strResultOrderOnTaxi}`
}

console.log(associationAllParametr(arguments[2], parseInt(arguments[3]), parseInt(arguments[4]), parseInt(arguments[5])));
