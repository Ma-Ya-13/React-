
import { useState } from 'react'
import './App.css'

function App() {
  const [todos, setTodos] = useState([
    {
      id: 1,
      title: "go to the gym",
      description: "go to the gym today"
    },
    {
      id: 2,
      title: "study React",
      description: "learn components"
    },
    {
      id: 3,
      title: "solve LeetCode",
      description: "solve one question today"
    }
  ])

  function addtodos() {
    setTodos([
      ...todos,
      {
        id: Date.now(),
        title: Math.random(),
        description: Math.random()
      }
    ])
  }

  return (
    <>
      <button onClick={addtodos}>Add Todo</button>

      {todos.map(todo => (
        <Todo
          key={todo.id} //to uniquely identify wich todo it is 
          title={todo.title}
          description={todo.description}
        />
      ))}
    </>
  )
}

function Todo({ title, description }) {
  return (
    <div>
      <h1>{title}</h1>
      <h4>{description}</h4>
    </div>
  )
}

export default App
