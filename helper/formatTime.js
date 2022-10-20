export function formatTime(time) {
  const arr = time.split('T')
  const arr1 = arr[0].split('-')

  return `${arr1[0]}年${arr1[1]}月${arr1[2]}日(木)${arr[1]}`
}
