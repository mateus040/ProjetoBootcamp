import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "../pages/home";
import NotFound from "../pages/not-found";
import Quiz from "../pages/quiz";
import CadastrarUsuario from "../pages/cadastrar-usuario";
import Pontuacao from "../pages/pontuacao";
import Dificuldade from "../pages/dificuldade";
import Login from "../pages/login";
import PrivateRoute from "./private-route";

export default function AppRouter() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />

        <Route path="/cadastrar-usuario" element={<CadastrarUsuario />} />

        <Route path="/login" element={<Login />} />

        <Route path="/pontuacao" element={<Pontuacao />} />

        <Route
          path="/quiz"
          element={
            <PrivateRoute>
              <Quiz />
            </PrivateRoute>
          }
        />

        <Route
          path="/dificuldade"
          element={
            <PrivateRoute>
              <Dificuldade />
            </PrivateRoute>
          }
        />

        {/* NotFound */}
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}
