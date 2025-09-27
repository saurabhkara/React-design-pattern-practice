import React, { useState } from "react";

export default function Input(prop) {
  const InputValue = prop.InputValue;
  const [data, setData] = useState("");
  return (
    <div>
      <input value={data} onChange={(e) => setData(e.target.value)} />
      <InputValue value={data} />
    </div>
  );
}
