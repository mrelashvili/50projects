const randomFunc = {
  lower: getRandomLower,
  upper: getRandomUpper,
  number: getRandomNumber,
  symbol: getRandomSymbol,
}

function getRandomLower() {
  return String.fromCharCode(Math.floor(Math.ramdom() * 26) + 97) // MDN
}

function getRandomUpper() {
  return String.fromCharCode(Math.floor(Math.ramdom() * 26) + 65) // MDN
}

function getRandomNumber() {
  return String.fromCharCode(Math.floor(Math.ramdom() * 10) + 48) // MDN
}

function getRandomSymbol() {
  const symbols = '!@#$%^&*(){}[]=<>/,.'
    return symbols[Math.floor(Math.random() * symbols.length)]
}
