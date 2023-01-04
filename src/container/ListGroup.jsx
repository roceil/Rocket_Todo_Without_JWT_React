import PageTab from "../component/PageTab";
import ListItem from "../component/ListItem";
import ListFooter from "../component/ListFooter.jsx";

function ListGroup({ data,setInitData,pagePosition,setPagePosition ,initData}) {
  return (
    <div className="mt-4 container ">
      <div className="shadow_list rounded-[10px] bg-white">
        <PageTab pagePosition={pagePosition} setPagePosition={setPagePosition}/>
        <ul className="">
          {data.map((item, index) => {
            const { content, id, finish } = item;
            return (
              <ListItem key={index} content={content} id={id} finish={finish} setInitData={setInitData} data={data}/>
            );
          })}
        </ul>
        <ListFooter initData={initData} setInitData={setInitData}/>
      </div>
    </div>
  );
}

export default ListGroup;
