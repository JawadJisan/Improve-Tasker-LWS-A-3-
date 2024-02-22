import { useContext, useState } from "react";
import Table from "./Table";
import TableHeader from "./TableHeader";
import AddAndUpdateTask from "./AddAndUpdateTask";
import { TasksContext } from "../context";

const TaskTable = () => {
  const [showModal, setShowModal] = useState(false);
  const { state } = useContext(TasksContext);
  const [searchText, SetSearchText] = useState("");

  function handleModalClose() {
    setShowModal(false);
  }
  return (
    <section className="mb-20" id="tasks">
      <div className="container">
        <div className="rounded-xl relative  border border-[rgba(206,206,206,0.12)] bg-[#1D212B] px-6 py-8 md:px-9 md:py-16">
          {showModal ? (
            <AddAndUpdateTask type="addTask" onClose={handleModalClose} />
          ) : (
            <>
              <TableHeader
                searchText={searchText}
                SetSearchText={SetSearchText}
                showModal={showModal}
                setShowModal={setShowModal}
              />
              {state?.allTasks.length > 0 ? (
                <Table setShowModal={setShowModal} searchText={searchText} />
              ) : (
                <p className="text-center text-2xl text-red-500 font-bold">
                  Task List is Empty!
                </p>
              )}
            </>
          )}
        </div>
      </div>
    </section>
  );
};

export default TaskTable;
