import {useEffect,useState} from 'react'
import './style.scss'

const Clock = () => {
    let timerId;
    const [date,setDate] = useState(new Date())

    const tick=() => {
        setDate(new Date());
    }

    useEffect(()=>{
        timerId=setInterval(() => tick(),1000);
    },[])
    return (
      <div>
        <p className='date'>{date.toLocaleTimeString()}.</p>
      </div>
    );
}

export default Clock;

  
  