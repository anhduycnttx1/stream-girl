export function processNumber(number) {
  const numStr = number.toString()
  if (numStr.length < 4) {
    return numStr
  } else if (numStr.length < 6) {
    const ans = number / 1000
    return (Math.floor(ans * 10) / 10).toString() + 'K'
  } else {
    const ans = number / 1000 / 1000
    return (Math.floor(ans * 10) / 10).toFixed(1).toString() + 'M'
  }
}
