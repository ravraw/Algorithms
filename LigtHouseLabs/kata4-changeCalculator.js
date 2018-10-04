var calculateChange = function(total, cash) {
  // Your code here
  const changeDenominations = {};
  let changeDue = cash - total;

  const convertAndSubstract = (denomination, centValue) => {
    changeDenominations[denomination] = Math.floor(changeDue / centValue);
    changeDue = changeDue - changeDenominations[denomination] * centValue;
  };

  switch (true) {
    case changeDue >= 2000:
      convertAndSubstract("twentyDollars", 2000);
    case changeDue >= 1000:
      changeDue >= 1000 && convertAndSubstract("tenDollars", 1000);
    case changeDue >= 500:
      changeDue >= 500 && convertAndSubstract("fiveDollars", 500);
    case changeDue >= 200:
      changeDue >= 200 && convertAndSubstract("twoDollars", 200);
    case changeDue >= 100:
      changeDue >= 100 && convertAndSubstract("oneDollars", 100);
    case changeDue >= 25:
      changeDue >= 25 && convertAndSubstract("quaters", 25);
    case changeDue >= 10:
      changeDue >= 10 && convertAndSubstract("dime", 10);
    case changeDue >= 5:
      changeDue >= 5 && convertAndSubstract("nickle", 5);
    case changeDue >= 1:
      changeDue >= 1 && convertAndSubstract("penny", 1);
  }

  return changeDenominations;
};

console.log(calculateChange(1787, 2000)); // { twoDollar: 1, dime: 1, penny: 3 }
console.log(calculateChange(2623, 4000)); // { ten: 1, twoDollar: 1, dollar: 1, quarter: 3, penny: 2 }
console.log(calculateChange(501, 1000)); // { twoDollar: 2, quarter: 3, dime: 2, penny: 4 }
