import React, { useState } from "react";
import { productContext } from "./Context";
import "./Tas.css";

function Tas(props) {
  const setTest = props.animation;
  const { number, setNumber, setMinutes, setWord } =
    React.useContext(productContext);
  const [wobble, setWobble] = React.useState(0);
  const Image = [
    "https://game-icons.net/icons/ffffff/000000/1x1/delapouite/dice-six-faces-one.svg",
    "https://game-icons.net/icons/ffffff/000000/1x1/delapouite/dice-six-faces-two.svg",
    "https://game-icons.net/icons/ffffff/000000/1x1/delapouite/dice-six-faces-three.svg",
    "https://game-icons.net/icons/ffffff/000000/1x1/delapouite/dice-six-faces-four.svg",
    "https://game-icons.net/icons/ffffff/000000/1x1/delapouite/dice-six-faces-five.svg",
    "https://game-icons.net/icons/ffffff/000000/1x1/delapouite/dice-six-faces-six.svg",
  ];

  const [tas, setTas] = useState(0);
  function Random() {
    let item = Math.floor(Math.random() * Image.length);
    setTas(item);
    setNumber(item);
    props.setStatus(true);
    setMinutes(item + 1);
    setWobble(1);
    setTest(false);
    setWord(" ");
  }

  return (
    <div>
      <img
        className="image"
        src={Image[tas]}
        alt="Dice"
        onClick={Random}
        onAnimationEnd={() => setWobble(0)}
        wobble={wobble}
      />
    </div>
  );
}

export default Tas;
