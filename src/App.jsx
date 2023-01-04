import { useState, useEffect } from "react";
import uuid from "react-uuid";
import Header from "./component/Header";
import TodoList from "./container/TodoList";
function App() {
  const [initData, setInitData] = useState([
    { content: "測試測試測試1", finish: true, id: uuid() },
    { content: "測試測試測試2", finish: false, id: uuid() },
    { content: "測試測試測試3", finish: true, id: uuid() },
  ]);
  const [data, setData] = useState([]);
  const [pagePosition, setPagePosition] = useState("全部");

  useEffect(() => {
    switch (pagePosition) {
      default:
        setData(initData);
        break;
      case "待完成":
        const unFinishData = initData.filter((item) => {
          return item.finish === false;
        });
        setData(unFinishData);
        break;
      case "已完成":
        const finishedData = initData.filter((item) => {
          return item.finish === true;
        });
        setData(finishedData);
        break;
    }
  }, [initData, pagePosition]);
  return (
    <>
      <Header />
      <TodoList
        setInitData={setInitData}
        data={data}
        pagePosition={pagePosition}
        setPagePosition={setPagePosition}
      />
    </>
  );
}

export default App;
