import { useState } from "react";
import checkAnswer from "./checkAnswer";

export default function CharacterSelector(props) {
    const [message, setMessage] = useState('Select character!');

    function handleSelect(characterName) {
        const characters = props.characters;
        let index;
        for (const i in props.characters) {
            if (characters[i].name === characterName && !characters[i].found) {
                index = i;
            }
        }
        if (index !== undefined) {
            if (checkAnswer(characterName, props.coords)) {
                props.setCharacters((chars) => {
                    const newCharacters = chars.map(
                        (char) => { return { ...char } });
                    newCharacters[index].found = true;
                    return newCharacters;
                });
            } else {
                setMessage('Try again!');
            }
        }
    }

    return (
        props.coords &&
        <div
            className="character-selector"
            style={{
                left: props.coords[0] + 50,
                top: props.coords[1] - 25,
            }}
        >
            <div>{message}</div>
            {props.characters.map((character) => {
                return (
                    <div
                        className="character"
                        key={character.name}
                        onClick={() => handleSelect(character.name)}
                    >
                        <img src={character.image} alt={character.name}></img>
                        <div>{character.found ? 'Found!' : character.name}</div>
                    </div>
                );
            })}
        </div>
    );
};