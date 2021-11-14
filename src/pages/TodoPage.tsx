import React, {FC} from 'react'
import Header from '../components/Header/Header'
import TodoRegister from '../components/Todo/TodoRegister'

const TodoPage: FC = () => {
  return (
    <div>
      <Header />
      <TodoRegister />
    </div>
  )
}

export default TodoPage
