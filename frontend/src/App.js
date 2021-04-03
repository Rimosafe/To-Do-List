import React, { useState, useRef } from 'react';
import Todo from './Todo';


function App() {
  const [list, setTodos] = useState([])

  const listItems = list.map(todo => {
    return <Todo key={todo.id} todo={todo} />
  })

  const todoNameRef = useRef()

  const { v4: uuidv4 } = require('uuid');


  function addTodo(e) {
    const name = todoNameRef.current.value
    const prevTodos = [...list, { id: uuidv4(), name: name, complete: false}]
    setTodos(prevTodos)
    todoNameRef.current.value = null
  }

  
  return (
    <>
      <div>{listItems}</div>
      <input ref={todoNameRef} type="text" /> 
      <button onClick={addTodo}>Add</button>
    </>
  )
}

export default App;
