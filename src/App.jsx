/*
function App() {
  const[count, setCount] = useState(0);
  return (
    <div>
      <h1> Counter Game </h1>
      <Buttons count={count} setCount={setCount}/>
      <Counter count={count} />
    </div>
  )
}

function Buttons({count, setCount}){
  return (<div>
    <Increase count={count} setCount={setCount}/>
    <Decrease count={count} setCount={setCount}/>
  </div>)
}

function Increase({count, setCount}){
  return <div>
    <button onClick={()=>setCount(count+1)}>Increase</button>
  </div>
}

function Decrease({count, setCount}){
  return <div>
    <button onClick={()=>setCount(count-1)}>Decrease</button>
  </div>
}

function Counter({count}){
  return <div>
    <h1> {count} </h1>
  </div>
}
*/

import React from 'react';
import { RecoilRoot, useRecoilValue, useSetRecoilState, atom } from 'recoil';
import './App.css';

const countState = atom({
  key: 'countState',
  default: 0
});

function App() {

  return (
    <RecoilRoot>
      <div>
        <h1>Counter Game</h1>
        <Buttons />
        <Counter />
      </div>
    </RecoilRoot>
  );
}

function Buttons() {
  return (
    <div>
      <Increase />
      <Decrease />
    </div>
  );
}

function Increase() {
  const setCount = useSetRecoilState(countState);

  return (
    <div>
      <button onClick={() => setCount((prevCount) => prevCount + 1)}>Increase</button>
    </div>
  );
}

function Decrease() {
  const setCount = useSetRecoilState(countState);
  return (
    <div>
      <button onClick={() => setCount((prevCount) => prevCount - 1)}>Decrease</button>
    </div>
  );
}

function Counter() {
  const count = useRecoilValue(countState);

  return (
    <div>
      <h1>{count}</h1>
    </div>
  );
}

export default App;