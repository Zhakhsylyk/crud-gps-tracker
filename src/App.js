import {  Route, Routes } from "react-router-dom";
import { EditTrain } from "./components/UI/EditTrain";
import { MainPage } from "./pages/MainPage";
import { MapPage } from "./pages/MapPage";

function App() {
  return (
    <div>
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/map" element={<MapPage />} />
          <Route path="/edit-train/:id" element={<EditTrain />} />
        </Routes>
    </div>
  );
}

export default App;
