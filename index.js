const arguments = process.argv
function pointParking (nameParkingPoint) {
  return `на стоянці "${nameParkingPoint}": `
}
function quantityTaxi (freeAuto) {
   return `вільних авто: "${freeAuto}" `
 }
 function numberTaxisGo (TaxisGo) {
   return `авто що прибувають протягом 5 хвилин: "${TaxisGo}" `
 }
 function pointCarGo (GoOutPoint) {
   return `авто що поїхали з точки: "${GoOutPoint}" `
 }
function associationAllparametr(nameParkingPoint,freeAuto,TaxisGo,GoOutPoint) {
const name = pointParking (nameParkingPoint);
const free = quantityTaxi (freeAuto);
const number = numberTaxisGo (TaxisGo);
const point = pointCarGo (GoOutPoint);
const text = `"Отримані данні показують що" `;
let strResultOrderOnTaxi = `То ж замовлення не може бути, опрацьованно.`;
    if (freeAuto>0) {
   strResultOrderOnTaxi =`То ж замовлення може бути, опрацьованно.`;
}
    else if (freeAuto===0 && TaxisGo > 0) {
   strResultOrderOnTaxi =`То ж замовлення може бути, опрацьованно протягом 5 хвилин.`;
}
  
    return `${text} ${name}${free}${number}${point}${strResultOrderOnTaxi}`

}

console.log(associationAllparametr(arguments[2],parseInt(arguments[3]),parseInt(arguments[4]),parseInt(arguments[5])));
