import AddTodo from "../component/AddTodo";
import ListGroup from "../container/ListGroup";
function TodoList({
  setInitData,
  data,
  pagePosition,
  setPagePosition,
  initData,
}) {
  return (
    <>
      <AddTodo setInitData={setInitData} />
      <ListGroup
        data={data}
        setInitData={setInitData}
        pagePosition={pagePosition}
        setPagePosition={setPagePosition}
        initData={initData}
      />
    </>
  );
}

export default TodoList;
