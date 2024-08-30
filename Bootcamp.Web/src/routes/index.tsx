import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "../pages/home";
import NotFound from "../pages/not-found";
import Quiz from "../pages/quiz";
import CadastrarUsuario from "../pages/cadastrar-usuario";
import Pontuacao from "../pages/pontuacao";
import Dificuldade from "../pages/dificuldade";

export default function AppRouter() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />

        <Route path="/cadastrar-usuario" element={<CadastrarUsuario />} />

        <Route path="/quiz" element={<Quiz />} />

        <Route path="/pontuacao" element={<Pontuacao />} />

        <Route path="/dificuldade" element={<Dificuldade />} />

        {/* NotFound */}
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}
