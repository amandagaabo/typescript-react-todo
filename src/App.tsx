import React, { useState }  from 'react';

import { AddTodoForm } from './AddTodoForm';
import { TodoList } from './TodoList';

// array with items of type Todo is what Todo[] means
const initialTodos: Todo[] = [
  {
    text: 'Book rental car',
    complete: false,
  },
  {
    text: 'Write app',
    complete: true,
  },
];

function App() {
  // use react hook to set and get todos
  const [todos, setTodos] = useState(initialTodos);

  const addTodo: AddTodo = (text: string) => {
    const newTodo = { text, complete: false };
    setTodos([...todos, newTodo]);
  };

  const toggleTodo = (selectedTodo: Todo) => {
    const newTodos = todos.map(todo => {
      if (todo === selectedTodo) {
        return {
          ...todo,
          complete: !todo.complete,
        };
      }
      return todo;
    });
    setTodos(newTodos);
  };

  return (
    <>
      <TodoList todos={todos} toggleTodo={toggleTodo} />
      <AddTodoForm addTodo={addTodo} />
    </>
  );
}

export default App;
