/* eslint-disable react-hooks/exhaustive-deps */
import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { CallMissionApi } from '../../redux/mission/missionFetch';
import MissionPage from './Missions';
import './mission.css';

const MissionsLogic = () => {
  const dispatchMissionState = useDispatch();
  const missionsStat = useSelector((state) => state.Missions);
  useEffect(() => {
    if (missionsStat.length === 0) dispatchMissionState(CallMissionApi());
  },
  [dispatchMissionState]);

  return (
    <div className="Missions-container">
      <table>
        <tbody>
          <tr className="mission-table">
            <th className="mission_name">Mission</th>
            <th className="description">Description</th>
            <th className="status">Status</th>
            <th className="hidden"> </th>
          </tr>
          {missionsStat.map((mission) => (
            <MissionPage
              key={mission.mission_id}
              id={mission.mission_id}
              name={mission.mission_name}
              description={mission.description}
              reserved={mission.reserved}
            />
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default MissionsLogic;
