import React from 'react';

function Todo({ todo, index, completeTodo ,removeTodo}) {
  return (
    <div className='todo'  style={{ textDecoration: todo.isCompleted ? 'Line-through' : '' }}>
      {todo.text}
      <div>
   
        <button onClick={() => completeTodo(index)}>Complete</button>
  <button onClick={()=>removeTodo(index)}>Remove</button>
      </div>
    </div>
  );
}

export default Todo;
