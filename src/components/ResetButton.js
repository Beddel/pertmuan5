import { useContext } from "react";
import { CounterContext } from "../context/HitungContext";
const ResetButton = () => {
 const { reset } = useContext(CounterContext);
 return <button onClick={reset}>Reset</button>;
};
export default ResetButton;