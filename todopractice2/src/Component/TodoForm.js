import React, { useState } from 'react'


function TodoForm({addtodo}) {
    const [value,setValue]=useState('')
    const onSubmit=(e)=>{
        e.preventDefault()
        if(!value)return 
        addtodo(value)
        setValue('')

    }
  return (
    <form className='input-todo' onSubmit={onSubmit}>
     <input type="text" name="" id="" value={value}
    onChange={e=>setValue(e.target.value)} />
</form>
  )
}

export default TodoForm