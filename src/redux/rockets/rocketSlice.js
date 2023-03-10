import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

// action type ...
const FETCHROCKETS = 'spaceTravelsHub/FETCHROCKETS';
const BOOKROCKET = 'spaceTravelsHub/BOOKROCKET';
const CANCELRESERVATION = 'spaceTravelsHub/CANCELRESERVATION';

const GetRockets = createAsyncThunk(FETCHROCKETS, async () => {
  const url = 'https://api.spacexdata.com/v4/rockets';
  const res = await axios.get(url);
  const rocketList = res.data;
  return rocketList;
});

export const bookRocket = (payload) => ({
  type: BOOKROCKET,
  payload,
});

export const cancelReservation = (payload) => ({
  type: CANCELRESERVATION,
  payload,
});

// reducer...
const rocketReducer = createSlice({
  name: 'rocketApi',
  initialState: {
    data: [],
    isFulfilled: false,
  },

  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(GetRockets.fulfilled, (state, action) => {
      state.isFulfilled = true;
      state.data = action.payload;
    });

    builder.addCase(BOOKROCKET, (state, action) => {
      const newState = state.data.map((rocket) => {
        if (rocket.id !== action.payload.id) return rocket;
        return { ...rocket, reserved: true };
      });
      state.data = newState;
    });

    builder.addCase(CANCELRESERVATION, (state, action) => {
      const newState = state.data.map((rocket) => {
        if (rocket.id !== action.payload.id) return rocket;
        return { ...rocket, reserved: false };
      });
      state.data = newState;
    });
  },
});

export default rocketReducer;
export { GetRockets };
