/* eslint-disable react-hooks/exhaustive-deps */
import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { CallMissionApi } from '../../redux/mission/missionFetch';
import MissionPage from './Missions';

const MissionsLogic = () => {
  const dispatch = useDispatch();
  const missionsStat = useSelector((state) => state.Missions);
  useEffect(() => {
    if (missionsStat.length === 0) dispatch(CallMissionApi());
  },
  [dispatch]);

  return (
    <div className="Missions-container">
      <table>
        <tbody>
          <tr className="mission-table">
            <th className="mission_name">Mission</th>
            <th className="description">Description</th>
            <th className="status">Status</th>
            <th className="member hide">Status</th>
          </tr>
          {missionsStat.map((mission) => (
            <MissionPage
              key={mission.mission_id}
              id={mission.mission_id}
              name={mission.mission_name}
              description={mission.description}
            />
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default MissionsLogic;
