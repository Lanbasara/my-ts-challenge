type Push<T extends Array<any>, U> = [...T,U]

type Result = Push<[1, 2], '3'> // [1, 2, '3']


export {
  Push
}