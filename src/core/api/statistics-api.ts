import { db } from '../firebase/firebase';
import { GameStatistics } from '../interfaces/game-statistics';

const statisticsAPI = {
  getStatistics() {
    return db.collection('statistics')
      .get()
      .then((snapshot) => snapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      })));
  },

  sendStatistics(data: GameStatistics) {
    return db.collection('statistics')
      .add(data)
      .then((res) => res);
  },
};

export default statisticsAPI;
