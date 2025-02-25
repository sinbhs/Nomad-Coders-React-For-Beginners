import { useState, useEffect } from "react";

function App() {
  const [counter, setValue] = useState(0);
  const [keyword, setKeyword] = useState("");
  const onClick = () => setValue((prev) => prev + 1);
  const onChange = (event) => setKeyword(event.target.value);

  useEffect(() => {
    console.log('I run only once.');
  }, []);
  // 빈 배열은 감시할 대상이 없으므로 딱 한번만 실행됨.

  useEffect(() => {
    console.log("I run when 'keyword' changes.");
  }, [keyword]);
  // 'keyword'가 변화할 때 코드를 실행할 거라고 react.js에게 알려주는 것

  useEffect(() => {
    console.log("I run when 'counter' changes.");
  }, [counter]);
  // 'counter'가 변화할 때 코드를 실행할 거라고 react.js에게 알려주는 것
  
  useEffect(() => {
    console.log("I run when keyword & counter changes.");
  }, [keyword, counter]);
  // 'keyword', 'counter'가 변화할 때 코드를 실행할 거라고 react.js에게 알려주는 것
  
  return (
    <div>
      <input onChange={onChange} type="text" placeholder="Search here..." value={keyword}></input>
      <h1>{counter}</h1>
      <button onClick={onClick}>click me</button>
    </div>
  );
}

export default App;