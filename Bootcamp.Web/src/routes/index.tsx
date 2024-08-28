import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "../pages";
import NotFound from "../pages/not-found";
import Quiz from "../pages/quiz";
import CadastrarUsuario from "../pages/cadastrar-usuario";

export default function AppRouter() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />

        <Route path="/cadastrar-usuario" element={<CadastrarUsuario />} />

        <Route path="/quiz" element={<Quiz />} />

        {/* NotFound */}
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}
