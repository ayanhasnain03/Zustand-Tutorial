import { useCounter } from "./hooks/useCounter";

const App = () => {
  const { count, inc, dec } = useCounter();
  return (
    <div className="App">
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          height: "100vh",
        }}
      >
        <strong style={{ fontSize: "5rem" }}>{count}</strong>
        <div className="buttons" style={{ display: "flex", gap: "1rem" }}>
          <button style={{ padding: "0.5rem" }} onClick={inc}>
            +
          </button>
          <button style={{ padding: "0.5rem" }} onClick={dec}>
            -
          </button>
        </div>
      </div>
    </div>
  );
};
export default App;
