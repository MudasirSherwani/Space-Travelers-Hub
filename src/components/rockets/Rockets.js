// import { useSelector, useDispatch } from 'react-redux';
// import { useState } from 'react';
// import { bookRocket, cancelReservation } from '../../redux/rockets/rocketSlice';

// const RocketsPage = () => {
//   const dispatch = useDispatch();
//   const rocketList = useSelector((state) => state.rockets.data);
//   const [btnText, setText] = useState('Reserve Rocket');

//   // const onClickHandler = (id) => {
//   //   if (btnText === 'Reserve Rocket') {
//   //     dispatch(bookRocket({ id }));
//   //     setText('Cancel Reservation');
//   //   } else if (btnText === 'Cancel Reservation') {
//   //     dispatch(cancelReservation({ id }));
//   //     setText('Reserve Rocket');
//   //   }
//   // };
//   const onClickHandler = (id) => {
//     if (btnText[id] === 'Reserve Rocket') {
//       dispatch(bookRocket({ id }));
//       setText({ ...btnText, [id]: 'Cancel Reservation' });
//     } else if (btnText[id] === 'Cancel Reservation') {
//       dispatch(cancelReservation({ id }));
//       setText({ ...btnText, [id]: 'Reserve Rocket' });
//     }
//   };

//   return (
//     <div className="container">
//       {rocketList.map((rocket) => (
//         <div key={rocket.id} className="rocket-card">
//           <div className="">
//             <img
//               src={rocket.flickr_images[0]}
//               alt="rocket-launch"
//               className="rocket-img"
//             />
//           </div>
//           <div className="rocket-details">
//             <h3 className="title ">{rocket.name}</h3>
//             <p className="description">{rocket.description}</p>
//             <button
//               type="button"
//               className="reserve-btn"
//               onClick={() => onClickHandler(rocket.id)}
//             >
//               {/* {btnText} */}
//               {btnText[rocket.id] || 'Reserve Rocket'}
//             </button>
//           </div>
//         </div>
//       ))}
//     </div>
//   );
// };

// export default RocketsPage;

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
  const [btnText, setText] = useState('Reserve Rocket');
  const dispatch = useDispatch();

  const onClickHandler = (id) => {
    if (btnText === 'Reserve Rocket') {
      dispatch(bookRocket({ id }));
      setText('Cancel Reservation');
    } else if (btnText === 'Cancel Reservation') {
      dispatch(cancelReservation({ id }));
      setText('Reserve Rocket');
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
          <button type="button" className="badge">
            Reserved
          </button>
          <span />
          {rocket.description}
        </p>
        <button
          type="button"
          className="reserve-btn"
          onClick={() => onClickHandler(rocket.id)}
        >
          {btnText}
        </button>
      </div>
    </div>
  );
};

export default RocketsPage;
