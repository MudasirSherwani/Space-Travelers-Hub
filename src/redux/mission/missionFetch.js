const MISSION_FETCH = 'redux/mission/MISSION_FETCH';
const MISSION_JOIN = 'redux/mission/MISSION_JOIN';
const MISSION_LEAVE = 'redux/mission/MISSION_LEAVE';

const initialState = [];
const reducerForMission = (state = initialState, action) => {
  switch (action.type) {
    case MISSION_FETCH:
      return action.missionData;
    case MISSION_JOIN:
      return state.map((missionData) => {
        if (missionData.mission_id !== action.payload) {
          return missionData;
        }
        return { ...missionData, reserved: true };
      });
    case MISSION_LEAVE:
      return state.map((missionData) => {
        if (missionData.mission_id !== action.payload) {
          return missionData;
        }
        return { ...missionData, reserved: false };
      });
    default:
      return state;
  }
};

export const fetchMissionData = (missionData) => ({
  type: MISSION_FETCH,
  missionData,
});

export const MissionJoin = (id) => ({
  type: MISSION_JOIN,
  payload: id,
});

export const MissionLeave = (id) => ({
  type: MISSION_LEAVE,
  payload: id,

});

export const CallMissionApi = () => async (dispatch) => {
  const response = await fetch('https://api.spacexdata.com/v3/missions');
  const data = await response.json();
  const DataRecieved = data.map((missionData) => ({
    reserved: false,
    mission_id: missionData.mission_id,
    mission_name: missionData.mission_name,
    description: missionData.description,
  }));

  dispatch(fetchMissionData(DataRecieved));
};
export default reducerForMission;
