import React, { useState, useEffect } from "react";
import { productContext } from "./Context";
import "../App.css";
let timer = null;

const Timer2 = () => {
  const { minutes, setMinutes } = React.useContext(productContext);
  const [second, setSecond] = useState(0);
  const [isPress, setPress] = useState(false);
  const [hour, setHour] = useState(0);

  const setTime = () => {
    if (second == 0) {
      setMinutes((prevCount) => prevCount - 1);
      setSecond(59);
    } else if (second != 0) {
      setSecond((prevCount) => prevCount - 1);
    }
  };

  const OnPress = () => {
    setPress(true);
  };
  const onPause = () => {
    setPress(false);
  };

  useEffect(() => {
    if (isPress) timer = setInterval(() => setTime(), 1000);
    return () => clearInterval(timer);
  }, [second, isPress]);
  return (
    <div className="timer">
      <div className="btn">
        <button
          style={{
            backgroundColor: "#fff",
            width: 100,
            height: 85,
            borderRadius: 20,
            marginLeft: 30,
            marginBottom: 50,
            color: "#2367FA",
            fontSize: 20,
            fontWeight: "bold",
          }}
          onClick={OnPress}
        >
          شروع
        </button>
        <button
          style={{
            backgroundColor: "#fff",
            width: 100,
            height: 85,
            borderRadius: 20,
            color: "#F5D40C",
            fontSize: 20,
            fontWeight: "bold",
          }}
          onClick={onPause}
        >
          پایان
        </button>
      </div>

      <h1 className="time">
        {" "}
        {minutes < 10 ? "0" + minutes : minutes}:
        {second < 10 ? "0" + second : second}
      </h1>
    </div>
  );
};

export default Timer2;
