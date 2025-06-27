import { useEffect, useState } from 'react';
// import './App.css';
import axios from 'axios';

function App() {

  const [nums, setNums] = useState([]);

  const update = () => {
    axios.get('http://127.0.0.1:5000/nums')
      .then((res) => {
        console.log(res.data);
        
        setNums(res.data);
      });
  }

  const add = () => {
    axios.post('http://127.0.0.1:5000/nums')
      .then(res => {
        console.log(res);
      })
      .catch(error => {
        console.log(error);
      })
      update();
  }

  useEffect(update, []);

  return (
    <>


      <button onClick={add}>
        Add Number
      </button>

      <ul>
        {nums.map((num, index) => (
          <li key={index}>{num}</li>
        ))}
      </ul>
    </>
  )
}

export default App
