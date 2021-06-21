export default function objectSample() {
  // オブジェクトリテラル記法で型定義

  let country: {
    language: string
    name: string
  } = {
    language: 'Japanese',
    name: 'Japan',
  }
  console.log(country)

  country = {
    language: 'English',
    name: 'United States of America',
  }
  console.log(country)

  // オプショナルとreadonly
  const human: {
    age: number
    lastName: string
    readonly firstName: string
    gender?: string
  } = {
    age: 33,
    lastName: 'Yamada',
    firstName: 'Tarou',
  }
  human.gender = 'male'
  human.lastName = 'Sato'
  // test.firstName = 'Jiro'

  console.log(human)
}
