import { useReducer } from "react"
import CounterContext from "./counter.context"
import CounterReducer from "./counter.reducer"

const CounterState = (props) => {

    const initialState = {
        counter: {
            current: 0,
            previous: 0,
            next: 0,
            previousAction: "none"//down
        }
    }

    const [state, dispatch] = useReducer(CounterReducer, initialState);

    const counterUp = () => {
        dispatch({ type: "COUNTER_UP", payload: +1 });
    }

    const counterDown = () => {
        dispatch({ type: "COUNTER_DOWN", payload: -1 });
    }

    const counterReset = () => {
        dispatch({ type: "COUNTER_RESET", payload: 0 });
    }

    const value = {
        counter: state.counter,
        counterUp,
        counterDown,
        counterReset
    }

    return (
        <CounterContext.Provider value={value}>
            {props.children}
        </CounterContext.Provider>
    )
}

export default CounterState;