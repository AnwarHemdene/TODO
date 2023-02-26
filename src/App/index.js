import logo from './../logo.svg';
import './index.css';
import List from './../list/index';
import CheckList from './data'
import { useState } from 'react';
function App() {
  const [list, setList] = useState(CheckList)

  return (
    <div className="App">
      <div className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          TODO App
        </p>
      </div>
      <div >
      {
        list.map((item) => {
        return <List key={item.id}/>})
      }

      </div>
      
    </div>
  );
}

export default App;
