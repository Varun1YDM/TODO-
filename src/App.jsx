import "./App.css";
import Todo from "./components/Todo";

function App() {
  return (
    <>
      <Todo />
      <footer className="absolute right-20 bottom-10">
        <span className="text-lg">by</span>{" "}
        <span className="text-3xl text-white">Varun Yadav</span>
      </footer>
    </>
  );
}

export default App;
