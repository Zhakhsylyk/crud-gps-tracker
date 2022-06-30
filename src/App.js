import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { MainPage } from "./pages/MainPage";
import { MapPage } from "./pages/MapPage";

function App() {
  return (
    <div>
      <Router>
        <Routes>
            <Route path="/" element={<MainPage />} />
          <Route path="/map" element={<MapPage />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
