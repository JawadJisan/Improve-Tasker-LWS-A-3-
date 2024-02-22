import Header from "./Header";
import Hero from "./Hero";
import TaskTable from "./TaskTable";
import Footer from "./Footer";

const Page = () => {
  return (
    <>
      <Header />
      <Hero />
      <TaskTable />
      {/* <AddAndUpdateTask /> */}
      <Footer />
    </>
  );
};

export default Page;
