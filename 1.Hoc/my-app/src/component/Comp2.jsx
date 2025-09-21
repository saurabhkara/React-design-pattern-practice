import React, { forwardRef, useEffect } from "react";
import withDimension from "./withDimensions";

function Comp2(props, forwardedRef) {
  return (
    <div ref={forwardedRef}>
      <h2>Height: {props.height}</h2>
      <h2>Width: {props.width}</h2>
    </div>
  );
}

export default withDimension(forwardRef(Comp2));
