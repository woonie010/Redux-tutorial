import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { changeInput, addTodo, delTodo } from '../store/todo';

const Todo = () => {
    const todos = useSelector(state => state.todo);
    console.log(todos)
    const dispatch = useDispatch();

    return (
        <div>
            <input value={todos.input} onChange={(e) => dispatch(changeInput(e.target.value))} placeholder={'무엇을'} />
            <button onClick={() => dispatch(addTodo())}>add</button>
            <div>
                {todos.todo.map((elem, i) => 
                    <div key={i}>
                        {elem.content}
                        <button onClick={() => dispatch(delTodo(elem.id))}>delete</button>
                    </div>)}
            </div>
        </div>

    )
}


export default Todo;