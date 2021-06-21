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
}
