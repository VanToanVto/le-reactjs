import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { decrease, increase } from './counterSlice';
CounterFeature.propTypes = {

};

function CounterFeature(props) {
    const dispatch = useDispatch();
    const count = useSelector(state => state.count);

    const handleIncreasClick = () => {
        const actions = increase();
        dispatch(actions);
    }

    const handleDecreasClick = () => {
        const actions = decrease();
        dispatch(actions);
    }

    return (
        <div>
            Counter {count}

            <div>
                <button onClick={handleDecreasClick}>Decrease</button>

                <button onClick={handleIncreasClick}>Increase</button>
            </div>
        </div>
    );
}

export default CounterFeature;