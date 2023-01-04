import { useState } from "react";
import AddItems_btn from "../img/addItems_btn.svg";
import uuid from "react-uuid";
function AddTodo({ setInitData }) {
  const [todoItem, setTodoItem] = useState(``);
  function addItem() {
    setInitData((prev) => {
      return [{ content: todoItem, finish: false, id: uuid() }, ...prev];
    });
    setTodoItem(``)
  }
  function changeTodoItem(e) {
    setTodoItem(e.target.value);
  }
  function enterPress(e) {
    if (e.key === "Enter") {
      setInitData((prev) => {
        return [{ content: todoItem, finish: false, id: uuid() }, ...prev];
      });
      setTodoItem(``)
    }
  }
  return (
    <div className="container mt-[40.55px] flex ">
      <input
        type="text"
        className="w-full py-3 px-4 rounded-[10px] mr-[-44px] "
        placeholder="新增待辦事項"
        value={todoItem}
        onChange={changeTodoItem}
        onKeyPress={enterPress}
      />
      <button type="button" onClick={addItem}>
        <img src={AddItems_btn} alt="addItems" />
      </button>
    </div>
  );
}

export default AddTodo;
