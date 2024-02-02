import { useState } from 'react'
import { db } from '../data/firebase'
import { collection, addDoc } from 'firebase/firestore'



export const AddTodos = () => {

  const [title, setTitle] = useState([])
  const Insert = async (e)=>{
    e.preventDefault();
    if(title !== ""){
      await addDoc(collection(db, "todos"), {
        // this are field that we insert to table todos
        title,
        completed:false
      })

      setTitle('')
    }
  }
  return (
    <>
      <form action="" onSubmit={Insert} className='form'>
        <div className='form-container'>
          <input type="text"
                 placeholder='Insert Homework...'
                 value={title}
                 onChange={(e) => setTitle(e.target.value.input)}
                 className=''
          />
        </div>
        <div className="form-btn">
          <button>Add</button>
        </div>
      </form>
    </>
  )
}
