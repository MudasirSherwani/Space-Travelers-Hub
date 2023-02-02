import React from 'react';
import { useSelector } from 'react-redux';
import './profile.css';

const MyProfilePage = () => {
  const missionsStat = useSelector((state) => state.Missions);
  const rocketList = useSelector((state) => state.rockets.data);

  return (
    <div className="myprofile-container">
      <div className="mission-container">
        <h2>My Missions</h2>
        <ul className="booked-list">
          {missionsStat.map((miss) => {
            if (miss.reserved) {
              return <li key={miss.mission_id}>{miss.mission_name}</li>;
            }
            return '';
          })}
        </ul>
      </div>

      <div className="rockets-holder">
        <h2>My Rockets</h2>
        <ul>
          {rocketList.map((rocket) => {
            if (rocket.reserved) {
              return <li className="li-item" key={rocket.id}>{rocket.name}</li>;
            }
            return '';
          })}
        </ul>
      </div>
    </div>
  );
};
export default MyProfilePage;
