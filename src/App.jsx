import { useState } from "react";
import uuid from "react-uuid";
import Header from "./component/Header";
import TodoList from "./container/TodoList";
function App() {
  const [data, setData] = useState([
    { content: "測試測試測試1", finish: true, id: uuid() },
    { content: "測試測試測試2", finish: false, id: uuid() },
    { content: "測試測試測試3", finish: true, id: uuid() },
  ]);
  const [pagePosition,setPagePosition] = useState("全部")
  console.table(data);


  return (
    <>
      <Header />
      <TodoList setData={setData} data={data} pagePosition={pagePosition} setPagePosition={setPagePosition}/>
    </>
  );
}

export default App;
