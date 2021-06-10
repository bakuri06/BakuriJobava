import Button from '@material-ui/core/Button';
import React,{useState} from 'react'
const Edit = ({submit,title,setTitle}) => {
  const handleChange = (e) => {
    setTitle(e.target.value);
  }
  return (
    <div>
      <form onSubmit={submit}>
      <input type="text" placeholder="write smth" onChange={handleChange}></input>
      <Button size="small" type='submit' variant="contained" color="primary">
        Save
      </Button>
      </form>
    </div>
  )
}

export default Edit;