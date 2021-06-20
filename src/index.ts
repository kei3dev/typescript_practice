import { logMessage } from './function/basic'
import { isUserSignedIn, isUserSignedIn2, sumProductsPrice } from './function/parameters'

logMessage('test')
isUserSignedIn('ABC', 'hoge')
isUserSignedIn('DEF', 'fuga')
isUserSignedIn('GHI')
isUserSignedIn2('ABC')
const sum = sumProductsPrice(100, 200, 300, 400, 500, 600)
console.log('レストパラメーターを持つ関数', sum)