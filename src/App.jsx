import { useState, useEffect } from 'react'
import './App.css'
import {collection, query, onSnapshot, updateDoc, deleteDoc} from "firebase/firestore"
import { db } from "./assets/data/firebase"
import { Title } from './assets/components/Title'
import { AddTodos } from './assets/components/AddTodos'
import { Todo } from './assets/components/Todo'

function App() {
  const [count, setCount] = useState(0)

  const [todos, setTodos] = useState([])

  //con este useEffect traemos toda la informacion de la tabal
  useEffect(() => {
    const q = query(collection(db, "todos"))
    const unsub = onSnapshot(q, (queSnapshot) =>{
      let todosArray = []
      queSnapshot.forEach((doc)=>{
        todosArray.push({...doc.data(), id: doc.id})
      })
      setTodos(todosArray)
    })

    return unsub();
  }, [])


  //realizamos la actalizacion de la tabla
  const handleEdit = async (todo, title) => {
    // firebase function to editing row
    await updateDoc(doc(db, 'todos', todo.id)),{title:title}
  }

  //realizamos la eliminacion de la tabla
  const handleDelete = async (todo) => {
    await deleteDoc(doc(db, "todos", id));
  }


  return (
    <>
      <div className="App">
        <div className="app-title">
          <Title/>
        </div>
        <div className="app-insert">
          <AddTodos/>
        </div>
          
        <div className="app-content">
          {todos.map( (data) => (
            <Todo/>
          ))}
        </div>
      </div>
    </>
  )
}

export default App