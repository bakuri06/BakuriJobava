import './App.css';
import React, { useState } from 'react'
import Content from './Itunes/Content';
import './Itunes/music.css'
const App = () => {
  const [music, setMusic] = useState();
  const [searchValue, setSearchValue] = useState();

  const handleChange = (e) => {
    e.preventDefault();
    setMusic(e.target.value);
  }

  const dontRefresh = (e) => {
    e.preventDefault();
    setSearchValue(music);
  }
  return (

    <div className="main-container">
      <form onSubmit={dontRefresh} className='searchContainer'>
        <input type="text" id='uniq' value={music} onChange={handleChange}></input>
        <button className='but' type='submit'>Search</button>
      </form>
      <Content music={music} searchValue={searchValue} />
    </div>
  )

}


export default App;



