type Sample1 = AnyOf<[1, '', false, [], {}]> // expected to be true.
type Sample2 = AnyOf<[0, '', false, [], {}]> // expected to be false.

type a = 'a' extends {} ? true : false
type aa = 1 extends {} ? true : false
type aaa = true extends {} ? true : false
type aaaa = false extends {} ? true : false
type aaaaa = [] extends {} ? true : false
type aaaaaa = [1,2,3] extends {} ? true : false
type aaaaaaa = never extends {} ? true : false
/**
 * key of this problem
 * 1. {} is a dangerous type， anything can be its child
 * 2. according to 1, we can use Record<PropertyKey, never> to replace {}
 * 3. 
 */

type FALSE = 0 | '' | false | [] | Record<PropertyKey, never>

type AnyOf<T extends Array<any>> = T extends [infer First,...infer Last] ? First extends FALSE ? AnyOf<Last> : true : false

export {
  AnyOf
}