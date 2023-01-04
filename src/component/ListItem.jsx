import delete_btn from "../img/delete_btn.svg";
function ListItem({ content, id, finish, setData, data }) {
  function deleteItem() {
    const result = data.filter((item) => {
      return item.id !== id;
    });
    setData(result);
  }
  function changeData() {
    const changeData = data.map((item) => {
      if (item.id === id) {
        item.finish = !finish;
      }
      return item;
    });
    setData(changeData)
  }

  return (
    <li className="flex justify-between py-[23px] px-6 relative list_border">
      <div className="flex items-center space-x-4">
        <input
          type="checkbox"
          className="w-5 h-5 "
          checked={finish}
          onChange={changeData}
        />
        <p>{content}</p>
      </div>
      <button
        type="button"
        className="opacity-50 hover_delete"
        onClick={deleteItem}
      >
        <img src={delete_btn} alt="delete_btn" />
      </button>
    </li>
  );
}

export default ListItem;
