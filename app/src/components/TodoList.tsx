import { useQuery, useQueryClient } from 'react-query';
import { getTodos } from '../api/getTodos';


const TodoList = () => {
    // const queryClient = useQueryClient();
    const todos = useQuery('todos', getTodos)
    console.log('query', todos);



    return todos && todos.data
        ? (
            <div style={{ display: 'flex', justifyContent: 'center' }}>
                <h2>{todos.data[0].username}</h2>
                <ul style={{ textAlign: 'left' }} >
                    {todos.data.map((todo: Record<string, any>) =>
                        <li key={todo._id}>
                            {todo.todo} {todo.isDone ? <span> ✅</span> : <span> ⛔</span>}
                        </li>
                    )}
                </ul>
            </div>
        )
        : null;
};

export default TodoList;
