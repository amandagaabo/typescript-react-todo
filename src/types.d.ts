// types defined in this file can be accessed in any tsx file, no importing needed

// use interface to define types for props that are an object
interface Todo {
    text: string;
    complete: boolean;
}

// use type to define functions, return type is void if nothing is returned
type ToggleTodo = (selectedTodo: Todo) => void;
type AddTodo = (text: string) => void;