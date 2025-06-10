import React from "react";

function CheckBox({ todos, setTodos, index }) {
  const handleCheck = (e) => {
    const newTodo = todos.map((todo, todoIndex) => {
      if (index === todoIndex) {
        return { ...todo, isComplete: !todo.isComplete };
      }

      return todo;
    });

    setTodos(newTodo);
  };

  return <input type="checkbox" onClick={handleCheck} />;
}

export default CheckBox;
