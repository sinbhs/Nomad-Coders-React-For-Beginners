import { useState, useEffect } from "react";

function App() {
  const [showing, setShowing] = useState(false);

  function Hello() {
    function byeFn() {
      console.log("bye :(");
    }
    function hiFn() {
      console.log("created :)");

      return byeFn;
    };
    useEffect(hiFn, []);
    return <h1>Hello</h1>;
  }
  
  const onClick = () => setShowing((prev) => !prev);
  return (
    <div>
      {showing ? <Hello/> : null}
      <button onClick={onClick}>{showing ? "Hide" : "Show"}</button>
    </div>
  );
}

export default App;