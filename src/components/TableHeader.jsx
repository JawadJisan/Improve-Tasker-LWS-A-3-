// import { useState } from "react";
// import AddAndUpdateTask from "./AddAndUpdateTask";

import { useContext, useState } from "react";
import { TasksContext } from "../context";
import { toast } from "react-toastify";

const TableHeader = ({
  setShowModal,
  showModal,
  SetSearchText,
  searchText,
}) => {
  const { dispatch } = useContext(TasksContext);

  const handleDeleteAll = () => {
    const shouldDelete = window.confirm(
      "Are you sure you want to delete all task list?"
    );

    if (shouldDelete) {
      dispatch({
        type: "DeleteAllTasks",
      });
      toast.success(`Successfully deleted all Task.`);
    } else {
      toast.error(`Delete operations  canceled`);
    }
  };

  const handleSearch = (e) => {
    e.preventDefault();
    // dispatch({
    //   type: "SetSearchText",
    //   payload: searchText,
    // });
  };

  return (
    <>
      <div className="mb-14 items-center justify-between sm:flex">
        <h2 className="text-2xl font-semibold max-sm:mb-4">Your Tasks</h2>
        <div className="flex items-center space-x-5">
          <form onSubmit={handleSearch}>
            <div className="flex">
              <div className="relative overflow-hidden rounded-lg text-gray-50 md:min-w-[380px] lg:min-w-[440px]">
                <input
                  type="search"
                  id="search-dropdown"
                  className="z-20 block w-full bg-gray-800 px-4 py-2 pr-10 focus:outline-none"
                  placeholder="Search Task"
                  required
                  onChange={(e) => {
                    SetSearchText(e.target.value);
                    // dispatch({
                    //   type: "SetSearchText",
                    //   payload: searchText,
                    // });
                  }}
                  value={searchText}
                />
                <button
                  type="submit"
                  className="absolute right-2 top-0 h-full rounded-e-lg text-white md:right-4"
                >
                  <svg
                    className="h-4 w-4"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 20 20"
                  >
                    <path
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                    />
                  </svg>
                  <span className="sr-only">Search</span>
                </button>
              </div>
            </div>
          </form>
          <button
            onClick={() => setShowModal(true)}
            className="rounded-md bg-blue-500 px-3.5 py-2.5 text-sm font-semibold"
          >
            Add Task
          </button>

          <button
            onClick={handleDeleteAll}
            className="rounded-md bg-red-500 px-3.5 py-2.5 text-sm font-semibold"
          >
            Delete All
          </button>
        </div>
      </div>
    </>
  );
};

export default TableHeader;
