import './App.css';
import React, { useState } from 'react'
import Today from './toDos/Today'
import Week from './toDos/Week'
import Button from '@material-ui/core/Button';

const App = () => {
  const [city, setCity] = useState('Tbilisi');
  const [clicked, setClicked] = useState(false);

  let handleChange = (e) => {
    e.preventDefault();
    setCity(e.target.value);
  }

  const EditValue = () => {
    setClicked(!clicked);
  }

  const dontRefresh = (e) => {
    e.preventDefault();
    setClicked(!clicked);
  }
  const Render = () => {
    if (city !== 'undefined') {
      return (
        <div>
          <form onSubmit={dontRefresh}className='inputclass'>
            <input type="text" value={city} onChange={handleChange}></input>
            <Button onClick={() => EditValue()} variant="contained" color="primary">Search</Button>
          </form>
          <div className="main-container">
            <Today city={city} clicked={clicked} />
            <Week city={city} clicked={clicked} />
          </div>
        </div>
      )
    } else {
      return (
        ""
      )
    }
  }
  return (
    <div>
      {Render()}
    </div>
  )
}




export default App;



