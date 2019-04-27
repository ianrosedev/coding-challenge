// ______________________________Problem 1 _____________________________________
const bullCity = () => alert('Durham is awesome!');

// bullCity();

// ______________________________Problems 2 & 3 ________________________________
const bands = ['Kiss', 'Aerosmith', 'ACDC', 'Led Zeppelin', 'Nickelback'];

const alertBands = array => array.forEach(band => alert(`I love ${band}`));

const alertGoodBands = array => {
  array.forEach(band => {
    band !== 'Nickelback' ?
      alert(`I love ${band}`) :
      alert(`I DON'T love Nickelback!`);
  });
};

// alertBands(bands);
// alertGoodBands(bands);

// ______________________________Problem 4 _____________________________________
const numArray = [34, 203, 16, 46, 34, 432, 342, 124, 33, 188, 12];

const average = array => {
  return (array.reduce((total, n) => total += n) / array.length).toFixed(2);
};

// console.log(average(numArray));

// ______________________________Problem 5______________________________________
const letterArray = [
  'a', 'b', 'c', 'd', 'c', 'b', 'b', 'c', 'a', 'e', 'b', 'e'
];

const frequency = array => {
  const itemCount = {};

  array.forEach(item => {
    itemCount[item] ? itemCount[item]++ : itemCount[item] = 1;
  });

  const sortedItemCount = Object.entries(itemCount).sort((a, b) => a[1] - b[1]);
  const mostFrequent = sortedItemCount[sortedItemCount.length - 1][0];
  const leastFrequent = sortedItemCount[0][0];

  return `The most frequent item is: ${mostFrequent}. The least frequent item is : ${leastFrequent}`;
};

// console.log(frequency(letterArray));

// ______________________________Problem 6______________________________________
const arr1 = ['a', 'b', 'c', 'a', 'a', 'b', 'd'];
const arr2 = ['a', 'b', 'b', 'a', 'e', 'c', 'c', 'g'];

const overlapping = (array1, array2) => {
  let overlapped = [];

  for (let i = 0; i < array1.length; i++) {
    for (let j = 0; j < array2.length; j++) {
      if (array1[i] === array2[j]) {
        overlapped.push(...array2.splice(j, 1));
        break;
      }
    }
  }

  return overlapped;
};

// console.log(overlapping(arr1, arr2));

// ______________________________Problem 7______________________________________
// If you pass in no second argument, the default array will be used
// If you pass in the wrong arguments an object will be returned
// with an incorrect answer
// It is also possibe to pass in bills that dont exist e.g. 40
const budgetToBills = (cost, bills = [100, 50, 20, 10, 5, 1]) => {
  // Make sure bills are in descending order
  const requestedBills = bills.sort((a, b) => b - a);
  const breakdown = {};

  requestedBills.forEach(bill => {
    while (cost >= bill) {
      breakdown[bill] ? breakdown[bill]++ : breakdown[bill] = 1;
      cost -= bill;
    }
  });

  return breakdown;
};

// console.log(budgetToBills(1744))
// console.log(budgetToBills(1754, [20, 10, 5, 1]));
// console.log(budgetToBills(1754, [100, 20, 50, 10, 5, 1]));
