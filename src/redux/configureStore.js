import { configureStore } from '@reduxjs/toolkit';
import reducerForMission from './mission/missionFetch';

const store = configureStore({
  reducer: {
    Missions: reducerForMission,
  },
});

export default store;
