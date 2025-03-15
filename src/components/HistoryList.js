import { useContext } from "react";
import { CounterContext } from "../context/HitungContext";
const HistoryList = () => {
 const { history } = useContext(CounterContext);
 return (
 <ul>
 {history.map((item, index) => (
 <li key={index}>Perubahan ke-{index + 1}: {item}</li>
 ))}
 </ul>
 );
};
export default HistoryList;