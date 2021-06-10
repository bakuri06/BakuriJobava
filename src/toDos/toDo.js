import './todo.css'
import List from './List'
import TitleInput from './Form'

import React,{useState} from 'react'

const ToDo = () => {
    const [data,setData] = useState([]);

    const addTodo = (title) => {
        setData(
            [
                {
                    editing:false,
                    title:title,
                    checked:false,
                    id:Math.random()*1000
                },
                ...data
            ]
        );
    }

    return (
        <div className='todos'>
            <h2 style={{textAlign: "center"}}>Todos</h2>
            <TitleInput onSubmit = {addTodo} />
            <List data={data} setData={setData}/>
        </div>
    )
}
export default ToDo;