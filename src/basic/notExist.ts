export default function notExistSample() {
  // ———————— nullの場合 ————————

  let valueNull = null
  console.log('valueNullの型:', typeof valueNull, '|', 'valueNullの値:', valueNull)

  valueNull = '値代入'

  if (valueNull) {
    console.log('値あり')
  } else {
    console.log('値なし')
  }

  // ———————— undefinedの場合 ————————

  let valueUndefined = undefined
  console.log('valueUndefinedの型:', typeof valueUndefined, '|', 'valueUndefinedの値:', valueUndefined)

  valueUndefined = '値代入'

  if (valueUndefined) {
    console.log('値あり')
  } else {
    console.log('値なし')
  }
}
