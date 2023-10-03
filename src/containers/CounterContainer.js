import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { decrement, increment, setColor } from "../actions";
import Counter from "../components/Counter";
import { getRandomColor } from "../utils";

const CounterContainer = React.memo(function CounterContainer() {
    
    let {number,color} = useSelector(state => ({
        number: state.number,
        color: state.color
    }));


    const dispatch = useDispatch();

    const onIncrement = () => dispatch(increment());
    const onDecrement = () => dispatch(decrement());
    const onSetColor = color => {
        color = getRandomColor();
        dispatch(setColor(color));
    }

    return (
        <Counter
            number={number}
            color={color}
            onIncrement={onIncrement}
            onDecrement={onDecrement}
            onSetColor={onSetColor}
        />
    )
});

export default CounterContainer;