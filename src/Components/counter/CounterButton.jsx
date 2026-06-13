import { useState} from 'react';

export default function CounterButton({ by, incrementCounter, decrementCounter }) {

    return (
        <div className="Counter">
            <div>
                <button className="CounterButton" onClick={() => incrementCounter(by)}>
                    +{by}
                </button>
                <button className="CounterButton" onClick={() => decrementCounter(by)}>
                    -{by}
                </button>
            </div>
        </div>
    )
}