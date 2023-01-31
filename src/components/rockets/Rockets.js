import { useSelector } from 'react-redux';

const RocketsPage = () => {
  const rocketList = useSelector((state) => state.rockets.data);

  return (
    <div className="container">
      {rocketList.map((rocket) => (
        <div key={rocket.id} className="rocket-card">
          <div className="">
            <img src={rocket.flickr_images[0]} alt="rocket-launch" className="rocket-img" />
          </div>
          <div className="rocket-details">
            <h3 className="title ">{rocket.name}</h3>
            <p className="description">{rocket.description}</p>
            <button type="button" className="reserve-btn">Reserve Rocket</button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default RocketsPage;
