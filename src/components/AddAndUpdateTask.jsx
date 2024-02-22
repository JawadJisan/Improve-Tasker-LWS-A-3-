import { useContext, useState } from "react";
import { TasksContext } from "../context";
import { toast } from "react-toastify";

const AddAndUpdateTask = ({ onClose, type }) => {
  const { state, dispatch } = useContext(TasksContext);
  const [error, setError] = useState("");

  const [title, setTitle] = useState(
    state?.updatedTasksData?.data?.title || ""
  );

  const [description, setDescription] = useState(
    state?.updatedTasksData?.data?.description || ""
  );
  const [tagInput, setTagInput] = useState(
    state?.updatedTasksData?.data?.tags || ""
  );
  const [tags, setTags] = useState([]);
  const [priority, setPriority] = useState(
    state?.updatedTasksData?.data?.priority || ""
  );

  console.log(tagInput);

  const handleTagInputChange = (event) => {
    setTagInput(event.target.value);
    const newTags = event.target.value.split(",").map((tag) => tag.trim());
    setTags(newTags);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (state?.updatedTasksData?.type === "updateTask") {
      console.log(tags);
      dispatch({
        type: "UpdateTask",
        payload: {
          id: state?.updatedTasksData?.data?.id,
          title: title,
          description: description,
          tags: tags,
          // tags: tagInput.split(",").map((tag) => tag.trim()),
          priority: priority,
          isFavourite: state?.updatedTasksData?.data?.isFavourite,
        },
      });
      dispatch({
        type: "ResetUpdatedData",
      });
      toast.success(`Successfully Updated Task`);
      onClose();
    } else {
      try {
        console.log(priority);
        dispatch({
          type: "AddTask",
          payload: {
            id: crypto.randomUUID(),
            title: title,
            description: description,
            tags: tags,
            priority: priority,
            isFavourite: false,
          },
        });
        toast.success(`Successfully Added ${title} Task.`);
        onClose();
      } catch (error) {
        console.log(error.message);
        toast.error(`Somthing Went Wrong`);
        toast.error(`${error.message}`);
        onClose();
      }
    }
  };
  return (
    <form
      onSubmit={handleSubmit}
      className="mx-auto my-10  w-full z-50 max-w-[740px] rounded-xl border border-[#FEFBFB]/[36%] bg-[#191D26] p-9 max-md:px-4 lg:my-20 lg:p-11"
    >
      <h2 className="mb-9 text-center text-2xl font-bold text-white lg:mb-11 lg:text-[28px]">
        {/* {type === "addTask" ? "Add New" : "Update"} Task */}
        {state?.updatedTasksData?.type === "updateTask"
          ? "Update"
          : "Add New"}{" "}
        Task
      </h2>

      {/* <!-- inputs --> */}
      <div className="space-y-9 text-white lg:space-y-10">
        {/* <!-- title --> */}
        <div className="space-y-2 lg:space-y-3">
          <label htmlFor="title">Title</label>
          <input
            className="block w-full rounded-md bg-[#2D323F] px-3 py-2.5"
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            name="title"
            id="title"
            required
          />
        </div>
        {/* <!-- description --> */}
        <div className="space-y-2 lg:space-y-3">
          <label htmlFor="description">Description</label>
          <textarea
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            className="block min-h-[120px] w-full rounded-md bg-[#2D323F] px-3 py-2.5 lg:min-h-[180px]"
            type="text"
            name="description"
            id="description"
            required
          ></textarea>
        </div>
        {/* <!-- input group --> */}
        <div className="grid-cols-2 gap-x-4 max-md:space-y-9 md:grid lg:gap-x-10 xl:gap-x-20">
          {/* <!-- tags --> */}
          <div className="space-y-2 lg:space-y-3">
            <label htmlFor="tags">Tags</label>
            <input
              value={tagInput}
              onChange={handleTagInputChange}
              className="block w-full rounded-md bg-[#2D323F] px-3 py-2.5"
              type="text"
              name="tags"
              id="tags"
              required
            />
          </div>
          {/* <!-- priority --> */}
          <div className="space-y-2 lg:space-y-3">
            <label htmlFor="priority">Priority</label>
            <select
              className="block w-full cursor-pointer rounded-md bg-[#2D323F] px-3 py-2.5"
              name="priority"
              id="priority"
              required
              value={priority}
              onChange={(e) => setPriority(e.target.value)}
            >
              <option value="">Select Priority</option>
              <option value="Low">Low</option>
              <option value="Medium">Medium</option>
              <option value="High">High</option>
            </select>
          </div>
        </div>
      </div>
      {/* <!-- inputs ends --> */}

      {/* {!tags?.length && <p>Error</p>} */}

      <div className="mt-16 flex justify-center lg:mt-20">
        <button
          // onClick={onClose}
          type="submit"
          className="rounded bg-blue-600 px-4 py-2 text-white transition-all hover:opacity-80"
        >
          {state?.updatedTasksData?.type === "updateTask"
            ? "Update"
            : "Create new"}{" "}
          Task
        </button>
      </div>
    </form>
  );
};

export default AddAndUpdateTask;
