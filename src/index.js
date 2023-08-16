module.exports = function check(str, bracketsConfig) {
  const stack = [];
  const openingBrackets = bracketsConfig.map((pair) => pair[0]);
  const closingBrackets = bracketsConfig.map((pair) => pair[1]);
  const matchingBrackets = Object.fromEntries(bracketsConfig);

  for (let i = 0; i < str.length; i++) {
    const char = str[i];

    if (openingBrackets.includes(char)) {
      stack.push(char);
    } else if (closingBrackets.includes(char)) {
      if (stack.length === 0) {
        return false;
      }
      const top = stack.pop();
      if (matchingBrackets[top] !== char) {
        return false;
      }
    }
  }

  return stack.length === 0;
};
