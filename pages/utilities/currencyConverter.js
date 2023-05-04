const CurrencyConverter = (num) => {
  let returnNum;
  const convert = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
  });
  if (isNaN(num)) {
   // console.log("isNaN");
    returnNum = num.replace(/,/g, "");
    returnNum = Number(returnNum);
  } else {
    returnNum = num;
  }
  return convert.format(returnNum);
};
export default CurrencyConverter;
