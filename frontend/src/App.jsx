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

        {/* Starting Page */}
        <Route path="/" element={<Navigate to="/login" replace />} />

        {/* Login */}
        <Route path="/login" element={<Login />} />

        {/* Dashboard */}
        <Route path="/dashboard" element={<Dashboard />} />

        {/* Image Upload */}
        <Route path="/upload" element={<ImageUpload />} />

        {/* Production */}
        <Route path="/production" element={<Production />} />

        {/* Weather */}
        <Route path="/weather" element={<Weather />} />

        {/* Unknown URL */}
        <Route path="*" element={<Navigate to="/login" replace />} />

      </Routes>
    </BrowserRouter>
  );
}

export default App;