import React, {FC, useState} from 'react'
import TextField from '@mui/material/TextField'
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';

const TodoRegister: FC = () => {
  const [task, setTask] = useState<string>("");
  
  const taskChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTask(e.target.value);
  }

  const addTask = (e: any) => { // any型定義している。後で変更する。
    console.log(task)
  }

  return (
    <div>
      <TextField
        variant="filled"
        placeholder="new task"
        onChange={taskChange}
      />
      <AddCircleOutlineIcon
        cursor="pointer"
        sx={{ fontSize: 40 }}
        onClick={addTask}
      />
      <h1>{task}</h1>
    </div>
  )
}

export default TodoRegister
