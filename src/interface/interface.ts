// —————————————————————————
// Interfaceで表現
// —————————————————————————

interface Bread {
  calories: number
}
interface Bread {
  type: string
}
const francePan: Bread = {
  calories: 300,
  type: 'hard',
}

// —————————————————————————
// 型エイリアスで表現
// —————————————————————————

type MaboDofu = {
  calories: number
  spicyLevel: number
}
type Rice = {
  calories: number
  gram: number
}
type MaboDon = MaboDofu & Rice // 交差型(union)
const mabodon: MaboDon = {
  calories: 500,
  spicyLevel: 10,
  gram: 350,
}
