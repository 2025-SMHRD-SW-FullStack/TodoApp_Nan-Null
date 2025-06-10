import React from "react";

function CheckBox({ todos, setTodos, index }) {
  const isComplete = todos[index].isComplete;

  const handleCheck = () => {
    const newTodo = todos.map((todo, todoIndex) => {
      if (index === todoIndex) {
        return { ...todo, isComplete: !todo.isComplete };
      }

      return todo;
    });

    setTodos(newTodo);
  };

  return <input type="checkbox" onClick={handleCheck} checked={isComplete} />;
}

export default CheckBox;
