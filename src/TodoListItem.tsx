import React from 'react';

// use interface to define prop types
// type Todo is a global type defined in types.d.ts
interface Props {
    todo: Todo;
    toggleTodo: ToggleTodo;
}

// for TodoListItem the type is a react functional component (FC) with props that have types defined in Props
export const TodoListItem: React.FC<Props> = ({ todo, toggleTodo }) => {
  return (
    <li>
        <label style={{ textDecoration: todo.complete ? 'line-through' : undefined }} >
            <input 
                type="checkbox" 
                checked={todo.complete}
                onClick={() => {
                    toggleTodo(todo)
                }}
            />
            {' '}
            {todo.text}
        </label>
    </li>
  );
};
