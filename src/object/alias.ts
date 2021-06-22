export default function typeAliasSample() {
  type Country = {
    capital: string
    language: string
    name: string
  }

  const japan: Country = {
    capital: 'Osaka',
    language: 'Japanese',
    name: 'Japan',
  }

  console.log(japan)

  const america: Country = {
    capital: 'Washington, D.C.',
    language: 'English',
    name: 'United States of America',
  }

  console.log(america)
}
