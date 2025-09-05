import { db, auth } from "./firebase";
import { addDoc, collection, serverTimestamp } from "firebase/firestore";

const handleGameClick = (game) => {
  addDoc(collection(db, 'clickedGames'), {
    id: game.id || game.position,
    name: game.name || game.title,
    website: game.website || `http://rawg.io/games/${game.slug}`,
    clickedAt: serverTimestamp(),
    userId: auth.currentUser ? auth.currentUser.uid: null
  });
  
}

export default handleGameClick;