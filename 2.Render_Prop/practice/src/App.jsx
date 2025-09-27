import Input from "./component/Input";

function App() {
  function InputValue(prop) {
    return <h3>Entered Value:{prop.value}</h3>;
  }

  return (
    <div>
      <h1 style={{ textAlign: "center" }}>
        Render Prop Design Pttern practice
      </h1>

      <div
        style={{
          alignItems: "center",
          justifyContent: "center",
          display: "flex",
        }}
      >
        <Input InputValue={InputValue} />
      </div>
    </div>
  );
}

export default App;
