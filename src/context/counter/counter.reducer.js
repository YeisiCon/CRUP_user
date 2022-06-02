export default (state, action) => {
    const { type, payload } = action;

    if (type === "COUNTER_UP") {
        state.counter = {
            previous: state.counter.current,
            next: state.counter.current + 2,
            current: state.counter.current += payload,
            previousAction: "up"
        }
        return {
            ...state
        }
    } else if (type === "COUNTER_DOWN") {
        state.counter = {
            previous: state.counter.current,
            next: state.counter.current - 2,
            current: state.counter.current += payload,
            previousAction: "down"
        }
        return {
            ...state
        }
    }
    else if (type === "COUNTER_RESET") {
        state.counter = {
            previous: 0,
            next: 0,
            current: 0,
            previousAction: "reset"
        }
        return {
            ...state
        }
    }
}