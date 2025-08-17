function getArrayParams(...arr) {
  let min = Infinity;
  let max = -Infinity;
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    const current = arr[i];
    if (current > max) {
      max = current;
    }
    if (current < min) {
      min = current;
    }
    sum += current;
    }
    const avg = parseFloat((sum / arr.length).toFixed(2));
  

  return { min: min, max: max, avg: avg };
}

function summElementsWorker(...arr) {
  if (arr.length === 0) return 0;
  let sum = 0;

  for (let i = 0; i < arr.length; i++) {
     const current = arr[i];
     sum += current;
  }
  return sum;
}

function differenceMaxMinWorker(...arr) { 
  if (arr.length === 0) return 0;
  const max = Math.max(...arr);
  const min = Math.min(...arr);
  return max - min;
}

function differenceEvenOddWorker(...arr) {
  if (arr.length === 0) return 0;
  let sumEvenElement = 0;
  let sumOddElement = 0;

  for (const num of arr) {
    if(num % 2 === 0) {
      sumEvenElement += num;
   } else {
      sumOddElement += num;
   }
  }
  return sumEvenElement - sumOddElement;
}

function averageEvenElementsWorker(...arr) {
  if (arr.length === 0) return 0;
  let sumEvenElement = 0;
  let countEvenElement = 0;

  for(const num of arr) {
    if(num % 2 === 0) {
      sumEvenElement += num;
      countEvenElement++;
    }
  }
  return countEvenElement === 0 ? 0 : sumEvenElement / countEvenElement;
}

function makeWork (arrOfArr, func) {
  let maxWorkerResult = -Infinity;
  
  for (const arr of arrOfArr) {
    const result = func(...arr);
    if (result > maxWorkerResult) {
      maxWorkerResult = result;
    }
  }
  return maxWorkerResult;
}
