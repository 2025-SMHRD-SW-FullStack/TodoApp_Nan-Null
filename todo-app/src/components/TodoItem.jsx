const TodoItem = ({ todoItem, index, children }) => {
    return (
        <p className="text-5xl">
            {index + 1}. {todoItem} {children}
        </p>
    );
};
export default TodoItem;
