import React, {FC} from 'react'
import Header from '../components/Header/Header'
import TodoRegister from '../components/Todo/TodoRegister'
import TodoList from '../components/Todo/TodoList'

const TodoPage: FC = () => {
  return (
    <div>
      <Header />
      <TodoRegister />
      <TodoList />
    </div>
  )
}

export default TodoPage
