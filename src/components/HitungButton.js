import { useContext } from "react";
import { CounterContext } from "../context/HitungContext";
const CounterButton = () => {
 const { setCount } = useContext(CounterContext);
 return <button onClick={setCount}>Tambah</button>;
};
export default CounterButton;