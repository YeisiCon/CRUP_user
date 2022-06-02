import "../src/styles/global.css";
import CounterState from "../src/context/counter/counter.state";

const App = ({ Component, pageProps }) => {
    return (
        <CounterState>
            <Component {...pageProps} />
        </CounterState>
    );
};

export default App;
