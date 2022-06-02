import "../src/styles/global.css";
import CounterState from "../src/context/counter/counter.state";
import UserState from "../src/context/user/user.state";

const App = ({ Component, pageProps }) => {
  return (
    <CounterState>
      <UserState>
        <Component {...pageProps} />
      </UserState>
    </CounterState>
  );
};

export default App;
