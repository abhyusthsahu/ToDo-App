import './Counter.css';
import { useState } from 'react';
import CounterButton from './CounterButton';

export default function Counter() {

    //[0,f]
    /*
     we are deconstructuring the array that useState returns, 
     we are getting the first element of the array and assigning it to count and 
     we are getting the second element of the array and assigning it to setCount
     */
    const [count, setCount] = useState(0);

    function incrementCounter(by) {
        setCount(count + by);
    }

    function decrementCounter(by) {
        setCount(count - by);
    }

    function resetCounterFunction() {
        setCount(0);
    }

    return (
        <>
            <span className='totalCount'>{count}</span>
            <CounterButton by={1} incrementCounter={incrementCounter} decrementCounter={decrementCounter} />
            <CounterButton by={2} incrementCounter={incrementCounter} decrementCounter={decrementCounter} />
            <CounterButton by={5} incrementCounter={incrementCounter} decrementCounter={decrementCounter} />
            <button className="resetButton" onClick={resetCounterFunction}>Reset</button>
        </>
    )
}