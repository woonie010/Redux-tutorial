import React from 'react';
import { useSelector } from 'react-redux';

const Number = () => {
    const store = useSelector((state) => state.counter);
    console.log('updated');

    return (
        <p>
            {store.cnt}
        </p>
    )
}

export default Number;