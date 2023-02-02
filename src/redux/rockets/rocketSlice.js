import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

// action type ...
const FETCHROCKETS = 'spaceTravelsHub/FETCHROCKETS';

const GetRockets = createAsyncThunk(FETCHROCKETS, async () => {
  const url = 'https://api.spacexdata.com/v4/rockets';
  const res = await axios.get(url);
  const rocketList = res.data;
  return rocketList;
});

// reducer...
const rocketReducer = createSlice({
  name: 'rocketApi',
  initialState: {
    data: [],
    isFulfilled: false,
  },

  reducers: {},
  extraReducers: {
    [GetRockets.fulfilled]: (state, action) => {
      state.isFulfilled = true;
      state.data = action.payload;
    },
  },
});

export default rocketReducer;
export { GetRockets };
