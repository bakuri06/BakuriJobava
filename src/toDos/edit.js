import Button from '@material-ui/core/Button';
import React from 'react'
const Edit = ({submit,title,setTitle}) => {
  const handleChange = (e) => {
    setTitle(e.target.value);
  }
  return (
    <div>
      <input type="text" placeholder="write smth" onChange={handleChange}></input>
      <Button onClick={submit}size="small" type='submit' variant="contained" color="primary">
        Save
      </Button>
    </div>
  )
}

export default Edit;