import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { EditTrain } from "./components/UI/EditTrain";
import { MainPage } from "./pages/MainPage";
import { MapPage } from "./pages/MapPage";

function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/index" element={<MainPage />} />
          <Route path="/index/map" element={<MapPage />} />
          <Route path="/index/edit-train/:id" element={<EditTrain />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
