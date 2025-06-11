const TodoItem = ({ todoItem, index, buttons }) => {
  const { checkBox, update, topMove, deleteButton } = buttons;
  const isCompleted = todoItem.isComplete;
  return (
    <li className="flex gap-x-2 ">
      {isCompleted ? (
        <div className="relative">
          <del className="w-0 h-0">
            <p className=" text-5xl m-0 flex items-center gap-x-4">
              {index + 1}.{" "}
              <span>
                {checkBox}
                {todoItem.data}
              </span>
            </p>
          </del>
          <div className="absolute w-[100px] h-[5px] bg-black top-[48%]"></div>
        </div>
      ) : (
        <p className=" text-5xl m-0 flex items-center gap-x-4">
          {index + 1}. {checkBox} {todoItem.data}
        </p>
      )}
      {update}
      {topMove}
      {deleteButton}
    </li>
  );
};
export default TodoItem;
