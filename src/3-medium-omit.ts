interface Todo {
  title: string
  description: string
  completed: boolean
}


type MyOmit<T, U extends keyof T> = {
  [key in keyof T as key extends U ? never : key] : T[key]
}

type TodoPreview = MyOmit<Todo, 'description' | 'title'>

const todo: TodoPreview = {
  completed: false,
}

type MyExclude<T, U extends T> = T extends U ? never : T

type MyOmit2<T,U extends keyof T> = {
  [key in MyExclude<keyof T, U>] : T[key]
}

type TodoPreview2 = MyOmit2<Todo, 'description' | 'title'>

const todo2: TodoPreview2 = {
  completed: false,
}

export {
  MyOmit
}