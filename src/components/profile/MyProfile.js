import React from 'react';
import { useSelector } from 'react-redux';

const MyProfilePage = () => {
  const missionsStat = useSelector((state) => state.Missions);
  return (
    <div className="myprofile-container">
      <div className="mission-container">
        <h2>My Missions</h2>
        <ul>
          {missionsStat.map((miss) => {
            if (miss.reserved) {
              return <li key={miss.mission_id}>{miss.mission_name}</li>;
            }
            return '';
          })}
        </ul>
      </div>
    </div>
  );
};
export default MyProfilePage;
