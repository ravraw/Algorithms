// find product to the power of a given number

const power = (base, expo) => {
  if (expo === 1) return base;
  return base * power(base, expo - 1);
};
console.log(power(2, 4));
