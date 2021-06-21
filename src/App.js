import './App.css';
import React, { useState } from 'react'
import Today from './Weather/Today'
import Week from './Weather/Week'
import Button from '@material-ui/core/Button';

const App = () => {
  const [city, setCity] = useState('Tbilisi');
  const [searchValue, setSearchValue] = useState('');

  let handleChange = (e) => {
    e.preventDefault();
    setCity(e.target.value);
  }

  const dontRefresh = (e) => {
    e.preventDefault();
    setSearchValue(city);
  }

  return (
    <div>
      <form onSubmit={dontRefresh} className='inputclass'>
        <input type="text" value={city} onChange={handleChange}></input>
        <Button type='submit' variant="contained" color="primary">Search</Button>
      </form>
      <div className="main-container">
        <Today city={city} searchValue={searchValue} />
        <Week city={city} searchValue={searchValue} />
      </div>
    </div>
  )
}




export default App;



