/* This function is used to prevent the user from entering anything other than numbers in a form field. */
exports.isNumber = (evt) => {
  evt = evt ? evt : window.event;
  let charCode = evt.which ? evt.which : evt.keyCode;
  if (
    charCode > 31 &&
    (charCode < 48 || charCode > 57) &&
    (charCode === 46 || charCode === 44)
  ) {
    evt.preventDefault();
  } else {
    return true;
  }
};

/* This function is used to format a number to a currency format. */
exports.formatCurrency = (amount, decimal, currency) => {
  if (amount === undefined) return;
  const value = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: currency,
    currencyDisplay: "narrowSymbol",
    minimumFractionDigits: decimal,
  });
  return value.format(amount);
};

/* This function takes a time in milliseconds and returns a string in the format of `day : hour : min :
seconds` */
exports.calculateHour = (time) => {
  let timeToMilliseconds = new Date(time).getTime();
  let currentTime = Date.now();
  let ellapsedTime = currentTime - timeToMilliseconds;
  const hour = Math.floor(ellapsedTime / (1000 * 60 * 60)) % 24;
  return hour;
};

/* This function takes a time in milliseconds and returns a string in the format of `day : hour : min :
seconds` */
exports.calculateMin = (time) => {
  let timeToMilliseconds = new Date(time).getTime();
  let currentTime = Date.now();
  let ellapsedTime = currentTime - timeToMilliseconds;
  const min = Math.floor(ellapsedTime / (1000 * 60)) % 60;
  return min;
};

/* A function that takes a string as an argument and returns the string with each word capitalized. */
exports.capitalizeEachWord = (string) => {
  if (!string) return;
  let words = string.split(" ").map((word) => {
    return word.charAt(0).toUpperCase() + word.slice(1);
  });
  return words.join(" ");
};

/* Taking a string as an argument and returning the string with each word capitalized. */
exports.abbreviate = (string) => {
  if (!string) return;
  let letters = string.split(" ").map((word) => {
    return word.charAt(0).toUpperCase();
  });
  return letters.join(" . ");
};

/* This function takes a string as an argument and returns the string with the first letter
capitalized. */
exports.capitalize = (string) => {
  if (!string) return;
  return string.charAt(0).toUpperCase() + string.slice(1);
};

/* This function takes a string as an argument and returns the string with the first letter
capitalized. */
exports.truncate = (text, length) => {
  if (text.length > length) {
    return text.slice(0, length) + "...";
  } else {
    return text;
  }
};

/* This function takes a string as an argument and returns the string with the first letter
capitalized. */
exports.removeUnderscore = (value) => {
  if (!value) return "";
  if (!value.includes("_")) return value;
  const splitValue = value.split("_");
  if (splitValue.length === 1) return splitValue;
  return splitValue.join(" ");
};

/* This function is used to convert a number to a locale string. */
exports.convertToLocale = function (price) {
  if (price) {
    return price.toLocaleString();
  }
};

/* This function is used to check if a string is empty or not. */
exports.blankString = function (str) {
  return !str || /^\s*$/.test(str);
};
