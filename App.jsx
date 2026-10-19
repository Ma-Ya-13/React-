
import { useState, useEffect } from 'react';
import axios from 'axios';

function App() {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    axios.get('https://dummyjson.com/todos/random')
      .then(function (res) {
        setTodos([res.data]);
      });
  }, []);

  return (
    <>
      {todos.map((todo) => (
        <Todo
          key={todo.id}
          title={todo.todo}
          description={todo.completed ? 'Completed' : 'Pending'}
        />
      ))}
    </>
  );
}

function Todo({ title, description }) {
  return (
    <div>
      <h1>{title}</h1>
      <p>{description}</p>
    </div>
  );
}

export default App;
