import { useContext } from "react";
import { CounterContext } from "../context/HitungContext";
const CounterDisplay = () => {
 const { count } = useContext(CounterContext);
 return <h2>Jumlah: {count}</h2>;
};
export default CounterDisplay;