import { Routes, Route } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar';
import RocketsPage from './components/Rockets';
import MyProfilePage from './components/MyProfile';
import MissionsPage from './components/Missions';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Navbar />
        <Routes>
          <Route path="/" element={<RocketsPage />} />
          <Route path="/missions" element={<MissionsPage />} />
          <Route path="/myProfile" element={<MyProfilePage />} />
        </Routes>
      </header>
    </div>
  );
}

export default App;
