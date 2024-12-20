// Task 4
const squareNumber = (num) => (num *= num);

const applyCallbackToEachElement = function (inputArray, callbackFunction) {
  const resultArray = [];
  for (let i = 0; i < inputArray.length; i += 1) {
    resultArray.push(callbackFunction(inputArray[i]));
  }
  return `При вихідному масиві ${inputArray}, ми отримали масив ${resultArray}`;
};

const numbersArray = [1, 2, 3, 4, 5];
alert(applyCallbackToEachElement(numbersArray, squareNumber));
// Task 5
const calculateDiscountedPrice = (price, discount, callback) =>
    callback(price - (price / 100) * discount);
      

  const showDiscountedPrice = (finalPrice) => `Товар буде коштувати ${finalPrice}`;
  
  const productPrice = prompt("Введіть вартість товару");
  const discountRate = prompt("А тепер введіть знижку");
  
  console.log(calculateDiscountedPrice(productPrice, discountRate, showDiscountedPrice));
  