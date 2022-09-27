type X = { 
  x: { 
    a: 1
    b: 'hi'
  }
  y: 'hey'
}

type Expected = { 
  readonly x: { 
    readonly a: 1
    readonly b: 'hi'
  }
  readonly y: 'hey' 
}

/**
 * need to have a "exit" in recursion
 */

type DeepReadonly<T> = {
  readonly [K in keyof T]: keyof T[K] extends never ? T[K] : DeepReadonly<T[K]>
}

type Todo = DeepReadonly<X> // should be same as `Expected`


const todo:Todo = {
  x : {
    a : 1,
    b : 'hi'
  },
  y : 'hey'
}

todo.x = 12
todo.x.a = 12
todo.x.b = 'dsadsad'
todo.y = 'dsadadsa'

export {
  DeepReadonly
}