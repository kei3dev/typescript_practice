export default function primitiveSample() {
  const name = 'keisuke'
  console.log('nameの型:', typeof name, '|', 'nameの値:', name)

  const age = 33
  console.log('ageの型:', typeof age, '|', 'ageの値:', age)

  const isSingle = true
  console.log('isSingleの型:', typeof isSingle, '|', 'isSingleの値:', isSingle)

  const isOver20: boolean = age >= 20
  console.log('isOver20の型:', typeof isOver20, '|', 'isOver20の値:', isOver20)
}
