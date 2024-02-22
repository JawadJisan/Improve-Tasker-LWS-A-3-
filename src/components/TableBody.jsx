import { useContext } from "react";
import { TasksContext } from "../context";
import { toast } from "react-toastify";

const TableBody = ({ data, setShowModal }) => {
  const { dispatch } = useContext(TasksContext);

  // DeleteSingleTask
  const hanldDelete = () => {
    const shouldDelete = window.confirm("want to delete this task?");
    if (shouldDelete) {
      dispatch({
        type: "DeleteSingleTask",
        payload: data,
      });
      toast.success(`Successfully deleted Task.`);
    } else {
      toast.error(`Delete operations  canceled`);
    }
  };

  const handleEdit = () => {
    setShowModal(true);
    dispatch({
      type: "UpdatedTasksData",
      payload: { type: "updateTask", data },
    });
  };

  const handleFavourite = () => {
    dispatch({
      type: "ToggleFavourite",
      payload: data,
    });
    if (data.isFavourite) {
      toast.warn(`Task removed Favourite`);
    } else {
      toast.success(`Task added to Favourite`);
    }
  };

  // ToggleFavourite
  return (
    <tbody>
      <tr className="border-b border-[#2E3443] [&>td]:align-baseline [&>td]:px-4 [&>td]:py-2">
        <td onClick={() => handleFavourite(data)}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="icon icon-tabler cursor-pointer icon-tabler-star"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            strokeWidth="2"
            stroke={data.isFavourite ? "yellow" : "currentColor"}
            fill={data.isFavourite ? "yellow" : "none"}
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
            <path d="M12 17.75l-6.172 3.245l1.179 -6.873l-5 -4.867l6.9 -1l3.086 -6.253l3.086 6.253l6.9 1l-5 4.867l1.179 6.873z" />
          </svg>
        </td>
        <td>{data.title}</td>
        <td>
          <div>{data.description}</div>
        </td>
        <td>
          <ul className="flex justify-center gap-1.5 flex-wrap">
            {data?.tags?.map((tag, index) => {
              // Generate a random color
              const randomColor =
                "#" + Math.floor(Math.random() * 16777215).toString(16);

              return (
                <li key={index}>
                  <span
                    className="inline-block h-5 whitespace-nowrap rounded-[45px] px-2.5 text-sm capitalize"
                    style={{ backgroundColor: randomColor }}
                  >
                    {tag}
                  </span>
                </li>
              );
            })}
          </ul>
        </td>
        <td className="text-center"> {data.priority} </td>
        <td>
          <div className="flex items-center justify-center space-x-3">
            <button onClick={() => hanldDelete(data)} className="text-red-500">
              Delete
            </button>
            <button onClick={() => handleEdit(data)} className="text-blue-500">
              Edit
            </button>
          </div>
        </td>
      </tr>
    </tbody>
  );
};

export default TableBody;
