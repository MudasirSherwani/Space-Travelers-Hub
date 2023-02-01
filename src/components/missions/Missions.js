import React from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { MissionLeave, MissionJoin } from '../../redux/mission/missionFetch';

const MissionPage = (props) => {
  const {
    id, name, description, reserved,
  } = props;

  const dispatchMissionReserved = useDispatch();
  const JoinEvent = () => {
    dispatchMissionReserved(MissionJoin(id));
  };

  const LeaveEvent = () => {
    dispatchMissionReserved(MissionLeave(id));
  };

  return (
    <tr id={id} className="table">
      <td className="mission_name-td">{name}</td>
      <td className="mission-description">
        {description}
      </td>
      <td>
        <button type="button" className={reserved ? 'mission-join' : 'mission-leave'}>{reserved ? 'Active Member' : 'NOT A MEMBER'}</button>
      </td>
      <td>
        {!reserved ? <button type="button" className="join-btn" onClick={JoinEvent}>Join Mission</button>
          : <button type="button" className="leave-btn" onClick={LeaveEvent}>Leave Mission </button>}
      </td>
    </tr>
  );
};

MissionPage.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  reserved: PropTypes.bool.isRequired,
};
export default MissionPage;
