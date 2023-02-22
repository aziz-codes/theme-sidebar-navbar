import { Sidebar, Navbar } from "./components/index";
const App = () => {
  return (
    <section className="flex flex-col">
      <Navbar />
      <div className="flex">
        <Sidebar />
        <div className="">routes</div>
      </div>
    </section>
  );
};

export default App;
