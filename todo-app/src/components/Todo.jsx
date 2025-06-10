import { useRef, useState } from "react";
import TodoItem from "./TodoItem";

const Todo = () => {
  const [todos, setTodos] = useState([]);
  const inputRef = useRef("");

  const addTodo = (e) => {
    e.preventDefault();

    const todo = inputRef.current.value;
    setTodos([...todos, todo]);

    inputRef.current.value = "";
    inputRef.current.focus();
  };

  return (
    <div className="flex flex-col justify-center items-center">
      <h1>Todo List</h1>
      <div>
        <form
          className="flex items-center justify-center h-[2.2rem] gap-x-3"
          onSubmit={addTodo}
        >
          <input
            type="text"
            className="h-full m-0 p-0 box-border text-xl px-2  rounded-md"
            ref={inputRef}
          />
          <input
            type="submit"
            className="flex justify-center items-center h-full px-3 py-2 rounded-md cursor-pointer border "
            value="등록"
          />
        </form>
      </div>

      <div>
        {todos.map((item, index) => (
          <TodoItem key={index} todoItem={item} index={index} />
        ))}
      </div>
    </div>
  );
};
export default Todo;
