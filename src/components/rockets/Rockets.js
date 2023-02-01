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

// manage reservation state...
const RocketCard = ({ rocket }) => {
  const [reserved, setReserved] = useState(rocket.reserved);
  const [btnText, setBtnText] = useState(
    reserved ? 'Cancel Reservation' : 'Reserve Rocket',
  );
  const [btnClass, setBtnClass] = useState(
    reserved ? 'cancel-btn' : 'reserve-btn',
  );
  const dispatch = useDispatch();

  // handle button click events ...
  const onClickHandler = (id) => {
    if (reserved) {
      dispatch(cancelReservation({ id }));
      setReserved(false);
      setBtnText('Reserve Rocket');
      setBtnClass('reserve-btn');
    } else {
      dispatch(bookRocket({ id }));
      setReserved(true);
      setBtnText('Cancel Reservation');
      setBtnClass('cancel-btn');
    }
  };

  // build updated UI...
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
