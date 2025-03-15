import React, { createContext, useState } from "react";
export const CounterContext = createContext();
export const CounterProvider = ({ children }) => {
 const [count, setCount] = useState(0);
 const [history, setHistory] = useState([]);
 const handleIncrement = () => {
 setCount(count + 1);
 setHistory([...history, count + 1]);
 };
 const handleReset = () => {
 setCount(0);
 setHistory([]);
 };
 return (
 <CounterContext.Provider value={{ count, setCount:
handleIncrement, history, reset: handleReset }}>
 {children}
 </CounterContext.Provider>
 );
};