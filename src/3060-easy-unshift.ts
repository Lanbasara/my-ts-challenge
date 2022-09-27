type Result = Unshift<[1, 2], 0> // [0, 1, 2]

type Unshift<T extends Array<any>, U> = [U,...T]
export {
  Unshift
}