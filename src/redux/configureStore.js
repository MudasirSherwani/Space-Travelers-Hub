import { configureStore } from '@reduxjs/toolkit';
import reducerForMission from './mission/missionFetch';

const store = configureStore({
  reducer: {
    mission: reducerForMission,
  },
});

export default store;
