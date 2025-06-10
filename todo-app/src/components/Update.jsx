import { useRef, useState } from "react";

const Update = ({ index, todos, setTodos }) => {
  const [isEditing, setIsEditing] = useState(false);
  const value = useRef("");

  return (
    <button
      onClick={() => {
        if (!isEditing) {
          setIsEditing(!isEditing);
          let newTodos = [...todos];
          newTodos[index].data = (
            <input type="text" placeholder={todos[index].data} ref={value} />
          );
          setTodos(newTodos);
        } else {
          setIsEditing(!isEditing);
          let newTodos = [...todos];
          newTodos[index].data = value.current.value;
          setTodos(newTodos);
        }
      }}
    >
      {isEditing ? "수정완료" : "내용 수정하기"}
    </button>
  );
};
export default Update;
