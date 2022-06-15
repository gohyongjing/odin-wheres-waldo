import WaldoImg from "./Waldo.webp";
import WendaImg from "./Wenda.webp";
import OdlawImg from "./Odlaw.webp";
import WhitebeardImg from "./Whitebeard.webp";

export default function CharacterSelector(props) {
    const characters = [{name: 'Waldo', image: WaldoImg},
                        {name: 'Wenda', image: WendaImg},
                        {name: 'Odlaw', image: OdlawImg},
                        {name: 'Whitebeard', image: WhitebeardImg}];
    
    return (
        props.coords &&
        <div
            className="character-selector"
            style={{
                left: props.coords[0] + 50,
                top: props.coords[1] - 25,
            }}
        >
            {characters.map((character) => {
                return (
                <div
                    className="character"
                    key={character.name}
                >
                    <img src={character.image} alt={character.name}></img>
                    <div>{character.name}</div>
                </div>
                );
            })}
        </div>
    );
};