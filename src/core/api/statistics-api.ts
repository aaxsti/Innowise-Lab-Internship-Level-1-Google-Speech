import { toast } from 'react-toastify';
import { db, FirebaseDocumentReference } from '../firebase/firebase';
import { GameStatistics } from '../interfaces/game-statistics';

const statisticsAPI = {
  getStatistics(): Promise<string | number | { id: string }[]> {
    return db.collection('statistics')
      .get()
      .then((snapshot) => snapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      })))
      .catch((error) => toast.info(error.message));
  },

  sendStatistics(data: GameStatistics):
    Promise<string | number | FirebaseDocumentReference> {
    return db.collection('statistics')
      .add(data)
      .then((res) => res)
      .catch((error) => toast.info(error.message));
  },
};

export default statisticsAPI;
