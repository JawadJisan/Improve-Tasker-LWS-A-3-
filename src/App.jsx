import { useReducer } from "react";
import Page from "./components/Page";
import { TasksContext } from "./context";
import { initialState, taskReducer } from "./reducers/TasksReducer";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  const [state, dispatch] = useReducer(taskReducer, initialState);
  return (
    <>
      <div className="bg-[#191D26] font-[Inter] text-white">
        <TasksContext.Provider value={{ state, dispatch }}>
          <Page />
          <ToastContainer />
        </TasksContext.Provider>
      </div>
    </>
  );
}

export default App;
