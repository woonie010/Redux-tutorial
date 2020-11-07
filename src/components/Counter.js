import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { decrease, increase } from '../store/counter';

const Counter = () => {
    const counter = useSelector(state => state.counter)
    const dispatch = useDispatch();
    console.log(1);

    return (
        <div>
            {counter.cnt}
            <button onClick={() => dispatch(increase())}>+</button>
            <button onClick={() => dispatch(decrease())}>-</button>
        </div>
    )
}

export default Counter;