export default function tupleSample() {
  // 一般的なタプルの型定義
  const response: [number, string] = [200, 'ok']
  // response = [400, 'Bad Request', 'test']
  // response = ["400", "Bad Request"]
  console.log(response)

  // 可変超引数(レストパラメーター)を使ったタプル
  const girlfriends: [string, ...string[]] = ['Kana', 'Miku', 'Keiko']
  girlfriends.push('Misa')
  console.log(girlfriends)
}
