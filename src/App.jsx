import React from 'react'
import { useTodos, addTodo, handleTodo, deleteTodo } from './Redux/todos';
import { useState } from 'react'








function App() {
  //const [todos, setTodos] = useState([])
  const [todo, setTodo] = useState("");
const { todoList } = useTodos()

function handleSubmit(e) {
e.preventDefault()

const newTodo = {
  id: new Date().getTime(),
  text: todo,
  completed: false,
};

addTodo(newTodo)

}


//setTodos([ ... todos].concat(newTodo))
//setTodo("")
//}




  return (
    <div className="">
      <div className="flex flex-col items-center">
        <h1 className="text-5xl mt-40 mb-20">What to do?</h1>
        <form onSubmit={handleSubmit}>
          <input
            className="bg-gray-300 border-solid border-2 border-black mr-10"
            type="text"
            onChange={(e) => setTodo(e.target.value)}
            value={todo}
          />
          <button
            className="text-xl bg-slate-500 p-2 rounded-full border-2 border-black text-white"
            type="submit"
          >
            Add Todo
          </button>
        </form>
      </div>
      {todoList.map((todo) => (
        <div className="flex flex-col items-center mt-4">
          <div
            className="flex justify-between mt-6 border-2 border-black pt-2 h-56 pl-2 pr-2 bg-yellow-200 shadow-2xl w-60"
            key={todo.id}
          >
            <div
              className={todo.completed ? "line-through text-3xl" : "text-3xl"}
            >
              {todo.text}
            </div>
            <div className="">
              <div className="bg-blue-500 h-10  p-2 rounded-full border-blue-700 border-2 text-white font-semibold text-center">
                <button className="" onClick={() => handleTodo(todo.id)}>Done</button>
              </div>
              <div className="bg-red-500 h-10  p-2 rounded-full border-red-900 border-2 text-white font-semibold text-center mt-2">
                <button className="" onClick={() => deleteTodo(todo.id)}>
                  Delete
                </button>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
      }

export default App
