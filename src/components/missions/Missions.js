import React from 'react';
import PropTypes from 'prop-types';

const MissionPage = (props) => {
  const { id, name, description } = props;
  return (
    <tr id={id} className="table">
      <td className="mission-name">{name}</td>
      <td className="mission-description">
        {description}
      </td>
    </tr>
  );
};

MissionPage.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
};
export default MissionPage;
