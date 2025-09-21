import { useEffect, useRef, useState } from "react";

function withDimension(Comp) {
  return function WithDimensions() {
    const [width, setWidth] = useState(null);
    const [height, setHeight] = useState(null);
    const ref = useRef();

    useEffect(() => {
      if (ref.current) {
        setHeight(ref.current.offsetWidth);
        setWidth(ref.current.offsetHeight);
      }
    }, [ref]);

    console.log(ref);
    return (
      <div>
        <Comp height={height} width={width} ref={ref} />
      </div>
    );
  };
}

export default withDimension;
