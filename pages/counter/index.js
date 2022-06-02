import { useContext } from "react";
import CounterContext from "../../src/context/counter/counter.context";

const Counter = () => {

    const { counter, counterUp, counterDown, counterReset } = useContext(CounterContext);

    return (
        <div style={{
            display: "flex",
            flexDirection: "column",
            gap: "40px",
            alignItems: "center",
            justifyContent: "center",
            width: "100%",
            height: "100vh",
            backgroundColor: "#8E8D93",
        }}>
            <div>
                {
                    Object.entries(counter).map(([key, value], index) => (
                        <h1
                            key={index}
                            style={{
                                fontWeight: "bold",
                                color: "#2F1C6A"
                            }}
                        >
                            Counter {key.replace("previousAction", "action previous")}: {value}
                        </h1>
                    ))
                }
            </div>
            <div style={{
                display: "flex",
                flexDirection: "row",
                gap: "20px"
            }}
            >
                <button
                    style={{
                        width: "100px",
                        height: "60px",
                        color: "#2F1C6A",
                        backgroundColor: "#fff",
                        border: "none",
                        borderRadius: "12px",
                        cursor: "pointer"
                    }}
                    onClick={counterUp}
                >
                    UP
                </button>
                <button style={{
                    width: "100px",
                    height: "60px",
                    color: "#2F1C6A",
                    backgroundColor: "#fff",
                    border: "none",
                    borderRadius: "12px",
                    cursor: "pointer"
                }}
                    onClick={counterDown}
                >
                    DOWN
                </button>
                <button style={{
                    width: "100px",
                    height: "60px",
                    color: "red",
                    backgroundColor: "#fff",
                    borderRadius: "12px",
                    cursor: "pointer",
                    border: "1px solid #fff"
                }}
                    onClick={counterReset}
                >
                    Reset
                </button>
            </div>
        </div >
    )
}

export default Counter;