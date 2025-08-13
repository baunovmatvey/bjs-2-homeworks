"use strict"
function solveEquation(a, b, c) {
  let arr = [];
  const discriminant = b * b - 4 * a * c;
  if (discriminant > 0) {
    let arr1 = (-b + Math.sqrt(discriminant)) / (2 * a);
    let arr2 = (-b - Math.sqrt(discriminant)) / (2 * a);
    arr.push(arr1, arr2);
  } else if (discriminant === 0) {
    let arr3 = -b / (2 * a);
    arr.push(arr3);
  } else {
    return arr;
  }
  return arr;
}

function calculateTotalMortgage(percent, contribution, amount, countMonths) {
  const monthPercent = percent / 100 / 12;
  const bodyCredit = amount - contribution;
  const pow = (1+ monthPercent) ** countMonths;
  const moneyPayment = bodyCredit * (monthPercent * pow) / (pow - 1);
  const totalAmount = moneyPayment * countMonths;
  return Number(totalAmount.toFixed(2));
}