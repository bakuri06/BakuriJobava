import Button from '@material-ui/core/Button';
import './todo.css'
import Edit from './edit'
import React,{useState} from 'react'
const List = ({data,setData}) => {
    const [title,setTitle] = useState('');
    const makeEditable = (index) => {
        setData(data.map(el => {
            if(el.id===data[index].id){
                el.editing=true;
            }
            return el;
        }))
    };

    const handleSubmit = (e) => {
        e.preventDefault();
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

    const deleteToDo = (index) => {
        let temp = [...data];
        temp.splice(index,1)
        setData([...temp]);
    }

    const toggleStatus = (index) => {
        let temp = [...data];
        temp[index].checked=!temp[index].checked;
        setData(temp);
    }

    return (
        <ul className='forStyle'>
            {data.map((elem,index) => {
                return(
                    <li key={index} className='li'>
                        <input type='checkbox' checked={elem.checked} onChange={(e) => toggleStatus(index)}/>
                            {elem.editing ?
                             <Edit submit={handleSubmit} title={title} setTitle={setTitle}/> : elem.title}

                            <div className='li_div'>
                                <Button size="small" onClick={() => {
                                    deleteToDo(index)
                                    }}variant="contained" color="secondary">Delete
                                </Button>

                                <Button size="small" onClick={() => makeEditable(index)}variant="contained" >
                                    Edit
                                </Button>
                            </div>
                    </li>
                )
            })}
        </ul>
)


}

export default List;