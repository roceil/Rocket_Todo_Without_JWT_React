import AddTodo from "../component/AddTodo";
import ListGroup from "../container/ListGroup";
function TodoList({ setData,data,pagePosition,setPagePosition }) {
  return (
    <>
      <AddTodo setData={setData} />
      <ListGroup data={data} setData={setData} pagePosition={pagePosition} setPagePosition={setPagePosition}/>
    </>
  );
}

export default TodoList;
