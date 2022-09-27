type Concat<T extends Array<any>,U extends Array<any>> = [...T,...U]

type Result = Concat<[1], [2]> // expected to be [1, 2]

export {
  Concat
}