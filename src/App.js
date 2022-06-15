import { useState } from "react";
import GameImg from "./wheres-waldo.jpg";

import BoundingBox from "./BoundingBox";
import CharacterSelector from "./CharacterSelector";

function App() {
  const [clicked, setClicked] = useState(null);

  function handleClick(e) {
    setClicked((prevClicked) => {
      return prevClicked ? null : [e.pageX, e.pageY]
    });
  }

  return (
    <div className="App">
      <img
        src={GameImg}
        alt="Waldo hidden in large group of people"
        onClick={handleClick}
      ></img>
      <BoundingBox coords={clicked}/>
      <CharacterSelector coords={clicked}/>
    </div>
  );
}

export default App;
