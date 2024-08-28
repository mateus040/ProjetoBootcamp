import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "../pages";
import NotFound from "../pages/not-found";
import Quiz from "../pages/quiz";
import CadastrarUsuario from "../pages/cadastrar-usuario";
import Pontuacao from "../pages/pontuacao";

export default function AppRouter() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />

        <Route path="/cadastrar-usuario" element={<CadastrarUsuario />} />

        <Route path="/quiz" element={<Quiz />} />

        <Route path="/pontuacao" element={<Pontuacao />} />

        {/* NotFound */}
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}
