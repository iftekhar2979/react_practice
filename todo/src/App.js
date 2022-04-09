import { useState } from 'react';
import './App.css';
import Todo from './Component/Todo';
import Todoform from './Component/Todoform';

function App() {
  const [todos, setTodos] = useState([
    {
      text: 'learn about React',
      isCompleted: false,
    },
    {
      text: 'Meet friend for lunch',
      isCompleted: false,
    },
    {
      text: 'Build really cool todo app',
      isCompleted: false,
    },
  ]);

  const addTodo = (text) => {
    const newTodos = [...todos, { text }];
    setTodos(newTodos);
  };
  const completeTodo = (index) => {
    const newTodos = [...todos];
    newTodos[index].isCompleted = true;
    setTodos(newTodos);
  };
  const removeTodo = (index) => {
    const newTodos = [...todos];
    newTodos.splice(index, 1);
    setTodos(newTodos);
  };
  return (
    <div className='App'>
      <div className='todo-List'>
        {todos.map((todo, index) => (
          <Todo
            key={index}
            index={todo}
            removeTodo={removeTodo}
            todo={todo}
            completeTodo={completeTodo}
          />
        ))}
        <Todoform addTodo={addTodo} />
      </div>
    </div>
  );
}

export default App;
