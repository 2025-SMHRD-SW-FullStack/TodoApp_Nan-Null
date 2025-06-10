const TodoItem = ({ todoItem, index, buttons }) => {
  const { checkBox, update, topMove } = buttons;
  const isCompleted = todoItem.isComplete;
  return (
    <li className="flex gap-x-2 ">
      {isCompleted ? (
        <del>
          <p className=" text-5xl m-0 flex items-center gap-x-4">
            {index + 1}. {checkBox} {todoItem.data}
          </p>
        </del>
      ) : (
        <p className=" text-5xl m-0 flex items-center gap-x-4">
          {index + 1}. {checkBox} {todoItem.data}
        </p>
      )}
      {update}
      {topMove}
    </li>
  );
};
export default TodoItem;
