import { getFirestore, doc, getDoc, } from 'firebase/firestore';

import {app} from './useFirebase';

export default async function checkAnswer(characterName, position) {
    const ALLOWABLE_ERROR = 0.02;
    const userPositionX = (position.x - position.left) / position.width;
    const userPositionY = (position.y - position.top) / position.height;

    const docRef = doc(getFirestore(app), 'characters', characterName);
    const snapshot = await getDoc(docRef);
    const result = [snapshot.data().x, snapshot.data().y];

    return Math.abs(result[0] - userPositionX) < ALLOWABLE_ERROR &&
        Math.abs(result[1] - userPositionY) < ALLOWABLE_ERROR;
};