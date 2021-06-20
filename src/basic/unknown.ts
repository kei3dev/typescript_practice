export default function unknownSample() {
  const maybeNumber: unknown = 33
  console.log('maybeNumber:', typeof maybeNumber, '|', 'maybeNumberの値:', maybeNumber)

  const isBool = maybeNumber === 'hoge'
  console.log('isBool:', typeof isBool, '|', 'isBoolの値:', isBool)

  if (typeof maybeNumber === 'number') {
    const sum = maybeNumber + 9
    console.log('sum:', typeof sum, '|', 'sumの値:', sum)
  }
}
