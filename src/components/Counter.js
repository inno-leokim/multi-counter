import React from 'react';
import './Counter.css';

function Counter ({number, color, index, onIncrement, onDecrement, onSetColor}) {

    return (
        <div
            className='Counter'
            onClick={() => onIncrement(index)}
            onContextMenu={
                (e) => {
                    e.preventDefault();
                    onDecrement(index);
                }
            }

            // onclick과 onDoubleClick을 같이 적용하면 더블클릭시 동시에 진행된다.
            onDoubleClick={
                (e) => {
                    e.preventDefault();
                    onSetColor(index);
                }
            }
            style={{backgroundColor: color}}
        >
            {number}
        </div>
    )
}

Counter.defaultProps = {
    index: 0,
    number: 0,
    color: 'black',
    onIncrement: () => console.warn('onIncrement not defined'),
    onDecrement: () => console.warn('onDecrement not defined'),
    onSetColor: () => console.warn('onSetColor not defined')    
}

export default Counter;