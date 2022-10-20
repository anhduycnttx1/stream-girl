export default function timeConverter(timestamp) {
  const a = new Date(timestamp)
  const month = a.getMonth()
  const date = a.getDate()
  const time =
    (month + 1 < 10 ? '0' + (month + 1) : month + 1) +
    '月' +
    (date < 10 ? '0' + date : date) +
    '日'
  return time
}
