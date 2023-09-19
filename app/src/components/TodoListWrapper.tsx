import { ErrorBoundary } from "react-error-boundary"
import TodoList from './TodoList';

const TodoListWrapper = () => {
  return (
    <ErrorBoundary fallback={<p>Something terrible happened...</p>}>
      <TodoList />
    </ErrorBoundary>
  )
}

export default TodoListWrapper