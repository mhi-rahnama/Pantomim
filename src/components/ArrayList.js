import "./ArrayList.css";
import { productContext } from "./Context";
import React, { useState } from "react";
function ArrayList({ animation }) {
  const [test, setTest] = animation;
  const { number, toggle, setToggle, word, setWord } =
    React.useContext(productContext);
  const numbers = [1, 2, 3, 4, 5, 6];
  const ARRAY = [
    ["سیب", "پرتغال", "پرتغال", "هلو", "انار", "هلو", "گیلاس"],
    [
      "سیب و به",
      "پرتغال و زردآلو",
      "انار و البالو",
      "انار و البالو",
      " هلو و گردو",
      " الو و گیلاس",
      " الو و گیلاس",
    ],
    [
      "سیب و به زرد",
      "پرتغال و زردآلو ترش",
      "انار و البالو قرمز",
      "انار و البالو قرمز",
      " هلو و گردو تازه",
      " الو نرسیده و گیلاس",
      " الو نرسیده و گیلاس",
      " الو نرسیده و گیلاس",
    ],
    [
      "  سیب کرم خورده و به",
      "پرتغال پاییزی و زردآلو",
      "انار شیراز و البالو",
      "انار شیراز و البالو",
      " هلو و گردو سفید",
      " الو قرمز و گیلاس",
      " الو قرمز و گیلاس",
    ],
    [
      "سیب و انبه",
      "پرتغال و نارنگی و زردآلو",
      "انار و لبو و البالو",
      "انار و لبو و البالو",
      " هلو و تمشک و گردو",
      " الو و شاه توت و گیلاس",
      " الو و شاه توت و گیلاس",
    ],
    [
      "سیب و به و ایمو",
      "پرتغال و لیموترش وزردآلو",
      "انار و زرشک  و البالو",
      "انار و زرشک  و البالو",
      " هلو موزی و گردو",
      " الو و خرمالو و گیلاس",
      " الو و خرمالو و گیلاس",
    ],
  ];
  // let j = number;
  // let NewArray = ARRAY[j];
  // let Num = Math.floor(Math.random() * 6);
  // let str = NewArray[Num];

  function click(index) {
    let j = number;
    let NewArray = ARRAY[j];
    let Num = Math.floor(Math.random() * 6);
    setWord(NewArray[Num]);
    console.log("if", test, index, number);
    if (index == number) {
      setTest(true);
    }
  }
  return (
    <div className="ArrayList">
      {numbers.map((item, index) => {
        return (
          <>
            {console.log("map", test)}
            <button
              style={{
                backgroundColor: number == index ? "#F5D40C" : "#00E2FF",
                transition: "1s",
                transform: number == index ? "rotate(360deg)" : "rotate(0deg)",
              }}
              className="item"
              onClick={() => click(index)}
              disabled={number == index ? false : true}
            >
              {item}
            </button>
          </>
        );
      })}

      <p className="pStr" style={{ fontWeight: "bold" }}>
        {word}
      </p>
    </div>
  );
}

export default ArrayList;
{
  /* <div>
        <button
          onClick={() => setTest(true)}
          className="p1"
          onAnimationEnd={() => setToggle(0)}
          toggle={toggle}
          style={{
            color: "#fff",
            backgroundColor: number == 0 ? "#F5D40C" : "#00E2FF",
            transition: "1s",
            transform: test ? "rotate(360deg)" : "rotate(0deg)",
          }}
          disabled={number == 0 ? false : true}
        >
          1
        </button>

        <button
          onClick={() => setTest(true)}
          // onAnimationEnd={() => (number == 1 ? setToggle(0) : setToggle(2))}
          // toggle={toggle}
          className="p2"
          style={{
            color: "#fff",
            transform: test ? "rotate(360deg)" : "rotate(0deg)",

            backgroundColor: number == 1 ? "#F5D40C" : "#00E2FF",
          }}
          disabled={number == 1 ? false : true}
        >
          2
        </button>

        <button
          onClick={() => setTest(true)}
          className="p3"
          style={{
            color: "#fff",
            backgroundColor: number == 2 ? "#F5D40C" : "#00E2FF",
          }}
          disabled={number == 2 ? false : true}
        >
          3
        </button>
      </div>
      <div className="div2">
        <button
          onClick={() => setTest(true)}
          className="p4"
          style={{
            color: "#fff",
            transform: test ? "rotate(360deg)" : "rotate(0deg)",
            backgroundColor: number == 3 ? "#F5D40C" : "#00E2FF",
          }}
          disabled={number == 3 ? false : true}
        >
          4
        </button>
        <button
          onClick={() => setTest(true)}
          className="p5"
          style={{
            color: "#fff",
            transform: test ? "rotate(360deg)" : "rotate(0deg)",
            transition: "1s",
            backgroundColor: number == 4 ? "#F5D40C" : "#00E2FF",
          }}
          disabled={number == 4 ? false : true}
        >
          5
        </button>
      </div>
      <div>
        <button
          onClick={() => setTest(true)}
          className="p6"
          style={{
            color: "#fff",
            transform: test ? "rotate(360deg)" : "rotate(0deg)",
            backgroundColor: number == 5 ? "#F5D40C" : "#00E2FF",
          }}
          disabled={number == 5 ? false : true}
        >
          6
        </button>
      </div> */
}
