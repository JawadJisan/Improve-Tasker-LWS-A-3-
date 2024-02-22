import { getAlldata } from "../data/taskLists";

const alldata = getAlldata();
const initialState = {
  allTasks: alldata,
  searchText: "",
  updatedTasksData: null,
};

const taskReducer = (state, action) => {
  let updatedTasks;
  let updatedTaskss;

  switch (action.type) {
    case "AddTask":
      return {
        allTasks: [...state.allTasks, action.payload],
      };
    case "UpdatedTasksData":
      return {
        ...state,
        updatedTasksData: action.payload,
      };
    case "ResetUpdatedData":
      return {
        ...state,
        updatedTasksData: null,
      };
    case "DeleteAllTasks":
      return {
        allTasks: [],
      };
    case "SetSearchText":
      return {
        ...state,
        searchText: action.payload,
      };
    case "DeleteSingleTask":
      return {
        ...state,
        allTasks: state.allTasks.filter((x) => x.id != action.payload.id),
      };
    case "ToggleFavourite":
      updatedTasks = state.allTasks.map((x) => {
        if (x.id === action.payload.id) {
          return { ...x, isFavourite: !x.isFavourite };
        }
        return x;
      });
      return {
        ...state,
        allTasks: updatedTasks,
      };
    case "UpdateTask":
      updatedTaskss = state.allTasks.map((task) => {
        if (task.id === action.payload.id) {
          console.log(action.payload);
          // Update only the selected task
          return { ...task, ...action.payload };
        }
        return task;
      });

      return {
        ...state,
        allTasks: updatedTaskss,
      };

    default:
      return state;
  }
};

export { initialState, taskReducer };
