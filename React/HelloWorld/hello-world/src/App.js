import logo from "./logo.svg";
import "./App.css";
import Greet from "./components/Greet";
import Welcome from "./components/Welcome";
import Message from "./components/Message";
import Counter from "./components/Counter";
import FunctionClick from "./components/functionClick";
import ClassClick from "./components/classClick";
import ParentComponent from "./components/ParentComponent";
function App() {
  return (
    <div className="App">
      {/* <Counter/> */}
      {/* <FunctionClick/>
      <ClassClick/> */}
      {/* <Greet></Greet>
      <Welcome/>
      <Message/> */}
      <ParentComponent />
    </div>
  );
}

export default App;
