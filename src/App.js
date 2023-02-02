import './App.css';
import { Routes, Route } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import Navbar from './components/Navbar';
import RocketsPage from './components/rockets/Rockets';
import MyProfilePage from './components/profile/MyProfile';
import MissionsLogic from './components/missions/missionLogic';
import { GetRockets } from './redux/rockets/rocketSlice';

function App() {
  const dispatch = useDispatch(); // fetch rockets list when page loads for the first time..
  useEffect(() => {
    dispatch(GetRockets());
  }, [dispatch]);

  return (
    <div className="App">
      <header className="App-header">
        <Navbar />
        <Routes>
          <Route path="/" element={<RocketsPage />} />
          <Route path="/missions" element={<MissionsLogic />} />
          <Route path="/myProfile" element={<MyProfilePage />} />
        </Routes>
      </header>
    </div>
  );
}

export default App;
