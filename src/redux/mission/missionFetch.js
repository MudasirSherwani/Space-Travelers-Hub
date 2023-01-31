const MISSION_FETCH = 'redux/mission/MISSION_FETCH';

const initialState = [];
const reducerForMission = (state = initialState, action) => {
  switch (action.type) {
    case MISSION_FETCH:
      return action.missionData;
    default:
      return state;
  }
};

export const fetchMissionData = (missionData) => ({
  type: MISSION_FETCH,
  missionData,
});

export const CallMissionApi = () => async (dispatch) => {
  const response = await fetch('https://api.spacexdata.com/v3/missions');
  const data = await response.json();
  const DataRecieved = data.map((missionData) => ({
    mission_id: missionData.mission_id,
    mission_name: missionData.mission_name,
    description: missionData.description,
  }));

  dispatch(fetchMissionData(DataRecieved));
};
export default reducerForMission;
