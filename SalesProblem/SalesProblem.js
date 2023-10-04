let productProfits = [
  {"Product A": -21},
  {"Product B": 35},
  {"Product C": -80},
  {"Product D": 0},
  {"Product E": 52},
  {"Product F": 72}
];

let maxProfit = topProfit(productProfits);
let minProfit = bottomProfit(productProfits);
let zeroProfit = zeroProfitProducts(productProfits);

function topProfit(productProfitArray) {
  let profits = productProfitArray.map(product => Object.values(product)[0]);
  return Math.max(...profits);
}

function bottomProfit(productProfitArray) {
  let profits = productProfitArray.map(product => Object.values(product)[0]);
  return Math.min(...profits);
}

function zeroProfitProducts(productProfitArray) {
  let profits = productProfitArray.map(product => Object.values(product)[0]);
  
  if (profits.length === 0) {
    return "No Data"; // Return "No Data" if the input array is empty
  } else {
    // Calculate the absolute differences between profits and 0
    let absoluteDifferences = profits.map(profit => Math.abs(profit - 0));
    
    // Find the minimum absolute difference
    let minAbsoluteDifference = Math.min(...absoluteDifferences);
    
    // Find the product(s) with the minimum absolute difference
    let closestToZeroProducts = productProfitArray.filter((product, index) => {
      return Math.abs(profits[index] - 0) === minAbsoluteDifference;
    });
    
    return closestToZeroProducts;
  }
}

console.log("Highest Profit Product:", maxProfit);
console.log("Lowest Profit Product:", minProfit);
console.log("Closest or equal to Zero Profit Products:", zeroProfit);