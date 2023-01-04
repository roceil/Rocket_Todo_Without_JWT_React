function ListFooter({ data,setInitData }) {
  const unFinishLength = data.filter(item => {
    return item.finish === false
  })
  const finishedItem = data.filter(item=>{
    return item.finish === false
  })
  function clearAllFinishBtn() {
    setInitData(finishedItem)
  }

  return (
    <div className=" py-[25px] px-6 flex justify-between items-center">
      <p className="">{unFinishLength.length} 個待完成項目</p>
      <button type="button" className="opacity-50 hover_delete" onClick={clearAllFinishBtn}>
        清除已完成項目
      </button>
    </div>
  );
}

export default ListFooter;
