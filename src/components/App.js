import { useState } from "react";

import BoundingBox from "./BoundingBox";
import CharacterSelector from "./CharacterSelector";

import GameImg from "../images/wheres-waldo.jpg";
import WaldoImg from "../images/Waldo.webp";
import WendaImg from "../images/Wenda.webp";
import OdlawImg from "../images/Odlaw.webp";
import WhitebeardImg from "../images/Whitebeard.webp";

function App() {
  const [clicked, setClicked] = useState(null);
  const [characters, setCharacters] = useState(
    [{name: 'Waldo', image: WaldoImg, found: false},
    {name: 'Wenda', image: WendaImg, found: false},
    {name: 'Odlaw', image: OdlawImg, found: false},
    {name: 'Whitebeard', image: WhitebeardImg, found: false}]
  );

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
      <CharacterSelector coords={clicked} characters={characters} setCharacters={setCharacters}/>
    </div>
  );
}

export default App;
