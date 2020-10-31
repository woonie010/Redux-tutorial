import React from 'react';
import { useDispatch } from 'react-redux';
import { increase } from '../store/reducer';

const Button = () => {
    const dispatch = useDispatch();
    const handleClick = () => {
        dispatch(increase());
    }
    return (
        <button onClick={handleClick}>
            제출
        </button>
    )
}

export default Button;