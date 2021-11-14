import React, {FC, useState} from 'react'
import TextField from '@mui/material/TextField'

const TodoRegister: FC = () => {
  const [task, setTask] = useState("");
  
  const taskChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTask(e.target.value);
  }

  return (
    <div>
      <TextField
        variant="filled"
        placeholder="new task"
        onChange={taskChange}
      />
    </div>
  )
}

export default TodoRegister
