import { Button } from "@material-ui/core";
import { useRef } from "react";

const ChildComponent = ({ name }) => {
  const headingRef = useRef();

  const changeColor = () => {
    console.log("headingRef", headingRef); // headingRef {current: div}
    headingRef.current.style.backgroundColor = "lime";
  };

  return (
    <div>
      <div
        style={{ height: "100px", width: "100px", backgroundColor: "grey" }}
        ref={headingRef}
      ></div>
      <Button variant="contained" onClick={changeColor}>
        Войти
      </Button>
    </div>
  );
};

export default ChildComponent;
