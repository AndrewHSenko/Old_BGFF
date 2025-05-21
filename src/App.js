import { Route, Routes, Outlet } from 'react-router-dom';
import LandingPage from './LandingPage.js';
import Legal from "./Legal.js";
import "./Fonts/MarkerFelt.ttf";


function App() {
  return (
    <Routes>
      <Route path="/" element={
        <Outlet />
        }>
        <Route index element={<LandingPage />}/>
        <Route path="legal" element={<Legal />}/>
      </Route>
    </Routes>
  );
}

export default App;
