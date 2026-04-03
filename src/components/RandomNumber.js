import { useState } from "react";
import randombtn from "../utils/randombtn";

function RandomNumber() {
  const [randomNum, setRandomNum] = useState(randombtn());

  const randomNumSet = () => {
    setRandomNum(randombtn());
  };

  return (
    <>
      <h1 className="lol1" style={}>{randomNum}</h1>
      <button onClick={randomNumSet} className="lol2">
        Generate New Random Number
      </button>
    </>
  );
}

export default RandomNumber;
