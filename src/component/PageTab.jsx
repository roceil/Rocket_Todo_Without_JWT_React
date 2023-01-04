import { useRef } from "react";

function PageTab({ pagePosition, setPagePosition }) {
  const pageAll = useRef("全部");
  const pageUnFinish = useRef("待完成");
  const pageFinished = useRef("已完成");
  function changePagePosition(value) {
    setPagePosition(value);
  }
  function checkPagePosition(value) {
    if (pagePosition === value) {
      return "active";
    } else {
      return "unActive";
    }
  }
  return (
    <>
      <button
        type="button"
        className={`font-bold py-4 w-1/3 ${checkPagePosition(pageAll.current)}`}
        onClick={() => {
          changePagePosition("全部");
        }}
      >
        全部
      </button>
      <button
        type="button"
        className={`font-bold py-4 w-1/3  ${checkPagePosition(
          pageUnFinish.current
        )}`}
        onClick={() => {
          changePagePosition("待完成");
        }}
      >
        待完成
      </button>
      <button
        type="button"
        className={`font-bold py-4 w-1/3  ${checkPagePosition(
          pageFinished.current
        )}`}
        onClick={() => {
          changePagePosition("已完成");
        }}
      >
        已完成
      </button>
    </>
  );
}

export default PageTab;
