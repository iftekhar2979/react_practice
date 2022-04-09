import React from 'react';

function Todo({ todo, index, completeTodo ,deleteTodo}) {
  return (
    <div
      className='todo'
      style={{ textDecoration: todo.isCompleted ? 'Line-through' : '' }}
    >
      {todo.text}
      <div>
        <button className='btn' onClick={() => completeTodo(index)}>Complete</button>
        <button className='btn' onClick={() => deleteTodo(index)}>Delete</button>
      </div>
    </div>
  );
}

export default Todo;
