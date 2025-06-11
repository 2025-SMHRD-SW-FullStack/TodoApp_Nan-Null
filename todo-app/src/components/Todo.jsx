import { useRef, useState } from "react";
import TodoItem from "./TodoItem";
import Update from "./Update";
import TopMove from "./TopMove";
import CheckBox from "./CheckBox";
import Delete from "./Delete";

const Todo = () => {
  const [todos, setTodos] = useState([]);
  const inputRef = useRef("");

  const addTodo = (e) => {
    e.preventDefault();

    const todoString = inputRef.current.value;
    const todoObject = {
      data: todoString,
      isComplete: false,
    };

    setTodos([...todos, todoObject]);

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

      <ol className="w-3/4 space-y-4">
        {todos.map((item, index) => {
          const buttons = {
            checkBox: (
              <CheckBox todos={todos} setTodos={setTodos} index={index} />
            ),
            update: <Update index={index} todos={todos} setTodos={setTodos} />,
            topMove: (
              <TopMove todos={todos} setTodos={setTodos} index={index} />
            ),
            deleteButton: (
              <Delete setState={setTodos} todos={todos} index={index}/>
            )
          };

          return (
            <>
              <TodoItem
                key={index}
                todoItem={item}
                index={index}
                buttons={buttons}
              />
            </>
          );
        })}
      </ol>
    </div>
  );
};
export default Todo;
