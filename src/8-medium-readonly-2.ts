interface Todo {
  title: string
  description: string
  completed: boolean
}


/**
 * key of this problem
 * Omit + & 
 */
type MyReadonly2<T, U extends keyof T = keyof T> = Omit<T,U> & {
  readonly [key in U] : T[key]
}



const todo: MyReadonly2<Todo, 'title' | 'description'> = {
  title: "Hey",
  description: "foobar",
  completed: false,
}

todo.title = "Hello" // Error: cannot reassign a readonly property
todo.description = "barFoo" // Error: cannot reassign a readonly property
todo.completed = true // OK


export {
  MyReadonly2
}