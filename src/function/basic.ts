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

// 呼び出しシグネチャ(省略記法)
type LogMessage = (message: string) => void
export const logMessage6: LogMessage = (message) => {
  console.log(message)
}

// 完全な呼び出しシグネチャ
type FullLogMessage = {
  (message: string): void
}
export const logMessage7: FullLogMessage = (message) => {
  console.log(message)
}
