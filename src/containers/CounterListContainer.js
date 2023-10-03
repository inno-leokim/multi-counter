import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { decrement, increment, setColor} from "../actions";
import CounterList from "../components/CounterList";
import { getRandomColor } from "../utils";

const CounterListContainer = React.memo(function CounterContainer() {
    
    const { counters } = useSelector(state => ({
        counters: state.counters
    }));


    const dispatch = useDispatch();

    const onIncrement = (index) => dispatch(increment(index));
    const onDecrement = (index) => dispatch(decrement(index));
    const onSetColor = (index) => {
        const color = getRandomColor();
        dispatch(setColor({index, color}));
    }

    return (
        <CounterList
            counters={counters}
            onIncrement={onIncrement}
            onDecrement={onDecrement}
            onSetColor={onSetColor}
        />
    )
});

export default CounterListContainer;