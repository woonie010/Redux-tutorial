import React from 'react';
import { useDispatch } from 'react-redux';
import { decrease } from '../store/reducer';

const Button2 = () => {
    const dispatch = useDispatch();
    return (
        <button onClick={() => dispatch(decrease())}>
            -
        </button>
    )
}

export default Button2;