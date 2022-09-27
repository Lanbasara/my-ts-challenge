type arr1 = ['a', 'b', 'c']
type arr2 = [3, 2, 1]


type tail1 = Last<arr1> // expected to be 'c'
type tail2 = Last<arr2> // expected to be 1


/**
 * key of this problem
 * [...] + infer split array type
 */
type Last<T extends Array<any>> = T extends [...infer Firsts, infer R] ? R : never

export {
  Last
}