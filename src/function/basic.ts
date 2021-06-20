// アロー関数
export const logMessage = (message: string): void => {
  console.log('アロー関数', message)
}

// 名前付き関数
export function logMessage2(message: string): void {
  console.log('名前付き関数', message)
}

// 関数式
const logMessage3 = function (message: string): void {
  console.log('関数式', message)
}

// アロー関数省略記法
const logMessage4 = (message: string): void => console.log('アロー関数省略記法', message)

// never型の関数
const alwaysThrowError = (message: string): never => {
  throw new Error(message)
}
