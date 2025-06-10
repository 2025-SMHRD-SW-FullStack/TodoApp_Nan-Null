const TodoItem = ({ todoItem, index, children }) => {
  return (
    <li className="flex gap-x-2 ">
      <p className=" text-5xl m-0">
        {index + 1}. {todoItem}
      </p>
      {children}
    </li>
  );
};
export default TodoItem;
