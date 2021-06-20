export default function anySample() {
  let valueAny: any = 'test'
  console.log('valueAnyの型:', typeof valueAny, '|', 'valueAnyの値:', valueAny)

  valueAny = 33
  console.log('valueAnyの型:', typeof valueAny, '|', 'valueAnyの値:', valueAny)
}
