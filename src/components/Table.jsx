import { useContext } from "react";
import TableBody from "./TableBody";
import { TasksContext } from "../context";

const Table = ({ searchText, setShowModal }) => {
  const { state } = useContext(TasksContext);

  const filterdTasks = state?.allTasks?.filter((data) => {
    const lowerCaseTitle = data.title.toLowerCase();
    const lowerCaseSearchText = searchText.toLowerCase();

    return lowerCaseTitle.includes(lowerCaseSearchText);
  });

  return (
    <div className="overflow-auto">
      <table className="table-fixed overflow-auto xl:w-full">
        <thead>
          <tr>
            <th className="p-4 pb-8 text-sm font-semibold capitalize w-[48px]"></th>
            <th className="p-4 pb-8 text-sm font-semibold capitalize w-[300px]">
              Title
            </th>
            <th className="p-4 pb-8 text-sm font-semibold capitalize w-full">
              Description
            </th>
            <th className="p-4 pb-8 text-sm font-semibold capitalize md:w-[350px]">
              Tags
            </th>
            <th className="p-4 pb-8 text-sm font-semibold capitalize md:w-[100px]">
              Priority
            </th>
            <th className="p-4 pb-8 text-sm font-semibold capitalize md:w-[100px]">
              Options
            </th>
          </tr>
        </thead>
        {/* {state?.allTasks?.map((data) => (
          <TableBody key={data.id} data={data} />
        ))} */}
        {filterdTasks?.map((data) => (
          <TableBody setShowModal={setShowModal} key={data.id} data={data} />
        ))}
      </table>
    </div>
  );
};

export default Table;
