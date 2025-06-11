// 1.ToDo 컴포넌트에서 전달받은(props) 데이터 구조 분해 -> state, setState, 선택 요소 index
// 2.삭제버튼이 클릭되었을 때 실행되는 함수 deleteContent 생성
// 2-1. filter 함수를 통해 선택한 항목을 제외한 나머지 항목으로 배열 생성
// 2-2. 새롭게 생성된 배열을 setTodos 를 통해 todos 에 반영

const Delete = ({setState, todos, index}) => {

  const deleteTodo = () => {
    const deleted = todos.filter((_, i) => i !== index);
    setState(deleted);
  }

  return (
    <button onClick={deleteTodo}>삭제</button>
  )
};
export default Delete;
