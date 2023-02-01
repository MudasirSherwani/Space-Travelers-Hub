import { useSelector, useDispatch } from 'react-redux';
import { bookRocket } from '../../redux/rockets/rocketSlice';

const RocketsPage = () => {
  const dispatch = useDispatch();
  const rocketList = useSelector((state) => state.rockets.data);

  const onClickHandler = (id) => {
    dispatch(bookRocket({ id, rocketList }));
  };

  return (
    <div className="container">
      {rocketList.map((rocket) => (
        <div key={rocket.id} className="rocket-card">
          <div className="">
            <img
              src={rocket.flickr_images[0]}
              alt="rocket-launch"
              className="rocket-img"
            />
          </div>
          <div className="rocket-details">
            <h3 className="title ">{rocket.name}</h3>
            <p className="description">{rocket.description}</p>
            <button
              type="button"
              className="reserve-btn"
              onClick={() => onClickHandler(rocket.id)}
            >
              Reserve Rocket
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default RocketsPage;
