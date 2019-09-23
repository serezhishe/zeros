module.exports = function zeros(expression) {
  let arr = expression.split('*');
  let twos = 0;
  let fives = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i][arr[i].length-2] === '!') {
      let tmp = d_fact(+arr[i].slice(0, arr[i].length - 2));
      twos += tmp[0];
      fives += tmp[1];
    } else {
      let tmp = fact(+arr[i].slice(0, arr[i].length - 1));
      twos += tmp[0];
      fives += tmp[1];
    }
  }
  if (twos > fives) return fives;
  else return twos;
}

function fact(num) {
  let count2 = 0;
  let count5 = 0;
  let k = 2;
   while (k <= num) {
    let tmp = k;
      while (tmp % 5 === 0) {
        tmp /= 5;
        count5++;
      }
    tmp = k;
    while (tmp % 2 === 0) {
      tmp /= 2;
      count2++;
    }
    k++;
  }
  return [count2, count5];
}

function d_fact(num) {
  let count2 = 0;
  let count5 = 0;
  if (num % 2) {
    let k = 5;
    while (k <= num) {
      let tmp = k;
      while (tmp % 5 === 0) {
        tmp /= 5;
        count5++;
      }
      k += 10;
    }
  } else {
    let k = 2;
    while (k <= num) {
      let tmp = k;
      while (tmp % 2 === 0) {
        tmp /= 2;
        count2++;
      }
      tmp = k;
      while (tmp % 5 === 0) {
        tmp /= 5;
        count5++;
      }
      k += 2;
    }
  }
  return [count2, count5];
}