import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "../pages/login";
import NotFound from "../pages/not-found";

export default function AppRouter() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<Login />} />

        {/* NotFound */}
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}
