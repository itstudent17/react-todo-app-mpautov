import { Button } from "@material-ui/core";
import { useMemo, useState } from "react";

const SecondComponent = () => {
  const [number, setNumber] = useState(0);

  // squaredNumber будет пересчитываться только при изменении
  // переменных из массива зависимостей, т.е. при каждом НОВОМ number
  const squaredNumber = useMemo(() => {
    console.log("in useMemo");
    return number ** 2;
  }, [number]);

  return (
    <>
      <h1>The number squared is: {squaredNumber}</h1>
      {[2, 5].map((i) => (
        <Button key={i} variant="contained" onClick={() => setNumber(i)}>
          Set number as {i}
        </Button>
      ))}
    </>
  );
};

export default SecondComponent;
