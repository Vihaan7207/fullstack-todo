import { useEffect, useState } from 'react';
// import './App.css';
import axios from 'axios';

function App() {

  const [nums, setNums] = useState([]);

  const update = () => {
    axios.get('http://127.0.0.1:5000/nums')
      .then((res) => {
        setNums(res.data);
      });
  }

  useEffect(update, []);

  return (
    <>
      <button onClick={update}>
        Update
      </button>

      <ul>
        {nums.map(num => {
          <li>{num}</li>
        })}
      </ul>
    </>
  )
}

export default App
