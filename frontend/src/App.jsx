import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import ImageUpload from "./pages/imageupload";
import Production from "./pages/Production";
import Weather from "./pages/Weather";

function App() {
  return (
    <BrowserRouter>
      <Routes>

        {/* Login */}
        <Route path="/login" element={<Login />} />

        {/* Dashboard */}
        <Route path="/dashboard" element={<Dashboard />} />

        {/* Crop Image Upload */}
        <Route path="/upload" element={<ImageUpload />} />

        {/* Production Result */}
        <Route path="/production" element={<Production />} />

        {/* Weather Dashboard */}
        <Route path="/weather" element={<Weather />} />

        {/* Default */}
        <Route path="/" element={<Navigate to="/login" replace />} />

        {/* Invalid URL */}
        <Route path="*" element={<Navigate to="/login" replace />} />

      </Routes>
    </BrowserRouter>
  );
}

export default App;