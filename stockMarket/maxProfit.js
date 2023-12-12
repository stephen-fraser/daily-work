// brute force method
const maxProfit = (stockPriceArray) => {
  mostProfit = -1;

  for (let i = 0; i < stockPriceArray.length; i++) {
    for (let x = 0; x < stockPriceArray.length; x++) {
      if (i < x) {
        let difference = stockPriceArray[x] - stockPriceArray[i];
        if (difference > mostProfit) {
          mostProfit = difference;
        }
      }
    }
  }
  return mostProfit;
};

const stocks = [45, 24, 35, 31, 40, 38, 11];

console.log(maxProfit(stocks));
