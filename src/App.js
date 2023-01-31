import { Routes, Route } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar';
import RocketsPage from './components/rockets/Rockets';
import MyProfilePage from './components/profile/MyProfile';
import MissionsLogic from './components/missions/missionLogic';

function App() {
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
