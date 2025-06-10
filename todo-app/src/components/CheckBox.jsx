import React from 'react'

function CheckBox ({todos, setTodos, index}) {

  const handleCheck = (e) => {
    const isCheck = e.target.checked;

    const currentTodo = todos[index];
    const isDel = currentTodo.isDel;
    

    const newTodo = todos.map((todo) => {
      if(currentTodo.id === todo.id) {
        return ({...todo, isDel:!todo.isDel});
      } 

      return todo;
    })

    setTodos(newTodo);
  }


  


  return (
    <input type="checkbox" onClick={handleCheck}/>
  )
}

export default CheckBox