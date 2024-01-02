
import './App.css';
import CustomNavbar from './CustomNavbar';
import MatchesLoader from './MatchesLoader';
import StandingsLoader from './StandingsLoader';
import { Routes, Route } from 'react-router-dom';
function App() {
  return (
    <>
      <CustomNavbar />
      <Routes>
        <Route path="*" element={<MatchesLoader />}/>
        <Route path="/standings" element={<StandingsLoader />}/>
      </Routes>
      
    </>
  );
}

export default App;
