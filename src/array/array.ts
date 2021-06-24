export default function arraySample() {
  const colors: string[] = ['red', 'blue']
  colors.push('yellow')
  // colors.push(123)
  console.log(colors)

  const even: Array<number> = [2, 4, 6]
  even.push(8)
  // even.push("10")
  console.log(even)

  const ids: (string | number)[] = ['abc', 123]
  ids.push('DEF')
  ids.push(456)
  // ids.push(true)
  console.log(ids)
}
