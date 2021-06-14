import './App.css';
import React, {useState,useEffect} from 'react'
import Today from './toDos/Today'
import Week from './toDos/Week'
import Modal from './toDos/Modal'
import Button from '@material-ui/core/Button';

const App = () => {
  const [city, setCity] = useState('Tbilisi');
  let [clicked, setClicked] = useState(false);

  let handleChange = (e) => {
    e.preventDefault();
    setCity(e.target.value);
  }

  const EditValue = () => {
    setClicked(!clicked);
    console.log(clicked);
  }
  return (

    <div className="main-container">
      <div className='empty'>
          <input type="text" value={city} onChange={handleChange}></input>
          <Button onClick={() => EditValue()} variant="contained" color="primary">Search</Button>
      </div>
      <Today city={city} clicked={clicked} handleChange={handleChange} EditValue={EditValue}/>
      <Week city={city} setCity={setCity} clicked={clicked} setClicked={setClicked} />
      <Modal city={city} setCity={setCity} clicked={clicked} setClicked={setClicked}/>

    </div>
  )
}




export default App;



