const TopMove = ({ todos, setTodos, index }) => {
  const moveTop = () => {
    const currentItem = [todos[index]];

    const otherItems = todos.filter((_, i) => i !== index);
    currentItem.push(...otherItems);

    setTodos(currentItem);
  };

  return (
    <button className="rounded-md px-3" onClick={moveTop}>
      맨 위로
    </button>
  );
};
export default TopMove;
