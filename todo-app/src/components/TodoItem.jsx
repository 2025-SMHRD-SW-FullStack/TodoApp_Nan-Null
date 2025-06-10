const TodoItem = ({ todoItem, index }) => {
  return (
    <p className="text-5xl">
      {index + 1}. {todoItem}
    </p>
  );
};
export default TodoItem;
