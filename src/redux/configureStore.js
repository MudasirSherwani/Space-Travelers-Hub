import { configureStore } from '@reduxjs/toolkit';
import reducerForMission from './mission/missionFetch';
import rocketReducer from './rockets/rocketSlice';

const store = configureStore({
  reducer: {
    rockets: rocketReducer.reducer,
    Missions: reducerForMission,
  },
});

export default store;
