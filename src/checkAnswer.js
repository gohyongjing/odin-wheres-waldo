import { getFirestore, collection, getDocs, query, where, } from 'firebase/firestore';

export default async function checkAnswer(characterName, position, app) {
    const ALLOWABLE_ERROR = 0.02;
    const userPositionX = (position.x - position.left) / position.width;
    const userPositionY = (position.y - position.top) / position.height;
    
    const result = [];

    const q = query(collection(getFirestore(app), 'characters'), where("name", "==", characterName));
    const querySnapshot = await getDocs(q);
    querySnapshot.forEach((doc) => {
        result.push(Promise.resolve(doc.data().x));
        result.push(Promise.resolve(doc.data().y));
    });
    return Math.abs((await result[0]) - userPositionX) < ALLOWABLE_ERROR &&
        Math.abs((await result[1]) - userPositionY) < ALLOWABLE_ERROR;
};