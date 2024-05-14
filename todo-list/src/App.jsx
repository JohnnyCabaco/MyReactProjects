import { useEffect, useState } from "react";
import "./Styles.css";
import { NewFormTodo } from "./Components/NewFormTodo";
import { ListTodo } from "./Components/ListTodo";

export default function App() {
  const [todos, setTodos] = useState(() => {
    const localValue = localStorage.getItem("ITEMS")
    if (localValue == null) return []
    
    return JSON.parse(localValue)
  })

  useEffect(() => {
    localStorage.setItem("ITEMS", JSON.stringify(todos))
  }, [todos])

  function addTodo(title) {

    setTodos(currentTodos => {
      return [...currentTodos, {
        id: crypto.randomUUID(), title, completed: false
      },
      ]
    })
  }

  function toggleTodo(id, completed) {
    setTodos(currentTodos => {
      return currentTodos.map(todo => {
        if (todo.id === id) {
          return { ...todo, completed }
        }
        return todo
      })
    })
  }

  function deleteTodo(id) {
    setTodos(currentTodos => {
      return currentTodos.filter(todo => todo.id !== id)
    })
  }

  console.log(todos)


  return (
    <>
      <NewFormTodo onSubmit={addTodo} />
      <h1 className="header">Todo List</h1>
      <ListTodo todos={todos} toggleTodo={toggleTodo} deleteTodo={deleteTodo}/>
    </>
  );
}
