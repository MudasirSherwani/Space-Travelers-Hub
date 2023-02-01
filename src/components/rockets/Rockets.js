import { useSelector, useDispatch } from 'react-redux';
import { useState } from 'react';
import { bookRocket, cancelReservation } from '../../redux/rockets/rocketSlice';

const RocketsPage = () => {
  const rocketList = useSelector((state) => state.rockets.data);

  return (
    <div className="container">
      {rocketList.map((rocket) => (
        <RocketCard key={rocket.id} rocket={rocket} />
      ))}
    </div>
  );
};

const RocketCard = ({ rocket }) => {
  const [reserved, setReserved] = useState(false);
  const [btnText, setBtnText] = useState('Reserve Rocket');
  const [btnClass, setBtnClass] = useState('reserve-btn');
  const dispatch = useDispatch();

  const onClickHandler = (id) => {
    if (!reserved) {
      dispatch(bookRocket({ id }));
      setReserved(true);
      setBtnText('Cancel Reservation');
      setBtnClass('cancel-btn');
    } else {
      dispatch(cancelReservation({ id }));
      setReserved(false);
      setBtnText('Reserve Rocket');
      setBtnClass('reserve-btn');
    }
  };

  return (
    <div className="rocket-card">
      <div className="">
        <img
          src={rocket.flickr_images[0]}
          alt="rocket-launch"
          className="rocket-img"
        />
      </div>
      <div className="rocket-details">
        <h3 className="title ">{rocket.name}</h3>

        <p className="description">
          {reserved && (

          <button type="button" className="badge">
            Reserved
          </button>

          )}
          {rocket.description}
        </p>
        <button
          type="button"
          className={btnClass}
          onClick={() => onClickHandler(rocket.id)}
        >
          {btnText}
        </button>
      </div>
    </div>
  );
};

export default RocketsPage;
