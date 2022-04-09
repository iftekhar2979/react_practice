import { useState } from 'react';
import './App.css';
import todo from './Component/Todo';
import TodoForm from './Component/TodoForm';
import Todosecond from './Component/Todosecond';

function App() {
  const [todos, setTodos] = useState(todo);
  const addTodo = (text) => {
    const newTodos = [...todos, { text }];
    setTodos(newTodos);
  };
  const completeTodo=(index)=>{
    const newTodos=[...todos];
    newTodos[index].isCompleted=true;
    setTodos(newTodos)
    
  }
const deleteTodo=(index)=>{
  const newTodos=[...todos];
  newTodos.splice(index, 1);
  setTodos(newTodos)
}
  return (
    <div className='App'>
      <div className='todo-name'>
        <TodoForm addtodo={addTodo} />
        <div className='todo-list'>
          <div className='newtodo'>
            <ul>
              {todos.map((todo, index) => (
                <Todosecond key={index} todo={todo} index={index}  completeTodo={completeTodo} deleteTodo={deleteTodo}/>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
