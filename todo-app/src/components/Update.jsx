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
                    newTodos[index] = <input type="text" placeholder={todos[index]} ref={value}></input>;
                    setTodos(newTodos);
                } else {
                    setIsEditing(!isEditing);
                    let newTodos = [...todos];
                    newTodos[index] = value.current.value;
                    setTodos(newTodos);
                }
            }}>
            {isEditing ? "수정완료" : "내용 수정하기"}
        </button>
    );
};
export default Update;
