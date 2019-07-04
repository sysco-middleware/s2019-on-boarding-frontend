// https://github.com/tc39/proposal-export-ns-from#proposed-addition
// this can maybe be fixed in the future
import * as myprocess from './myprocess'
import * as onboard from './onboard'
export {myprocess}
export {onboard}
