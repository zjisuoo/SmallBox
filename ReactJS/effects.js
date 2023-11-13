import Button from "./Button";
import styles from "./App.module.css";
import {useState, useEffect} from "react";

function Hello(){
  const [counter, setValue] = useState(0);
  const [keyword, setKeyword] = useState("");
  const onClick = () => setValue((prev) => prev + 1);
  const onChange = (event) => setKeyword(event.target.vaule);
  useEffect(function(){
    console.log("hi :)");
    return function(){
      console.log("bye :(");
    };
  }, []);
  useEffect(() => {
    console.log("hi : )");
    return () => console.log("bye : (");
  }, []);
  return (
  <div>
    <h1>Hello</h1>
    <input
      value={keyword}
      onChange={onChange}
      type="text"
      placeholder="Search here..."/>
    <h1>{counter}</h1>
    <button onClick={onClick}>Click me</button>
  </div>
  );
}

function App() {
  const [showing, setShowing] = useState(false);
  const onClick = () => setShowing((prev) => !prev);
  return (
  <div>
    {showing ? <Hello /> : null}
    <button onClick = {onClick}>{showing ? "Hide" : "Show"}</button>
  </div>
  );
}
  
export default App;
