import { useNavigate } from "react-router-dom";
import axios from "axios";
import apiErrorHandler from "../../services/api-error-handler";
import { useState } from "react";

interface Props {
  children: React.ReactNode;
}

export const Layout = ({ children }: Props) => {
  const navigate = useNavigate();

  const [loading, setLoading] = useState<boolean>(false);

  const handleLogout = async () => {
    setLoading(true);
    await axios
      .post(
        "http://localhost:8000/api/accounts/logout/",
        {},
        {
          withCredentials: true,
        }
      )
      .then(() => {
        sessionStorage.clear();
        navigate("/");
      })
      .catch(apiErrorHandler)
      .finally(() => setLoading(false));
  };

  const isLoggedIn = !!sessionStorage.getItem("user_id");

  return (
    <>
      <div className="fundo">
        {Array(10)
          .fill("?")
          .map((_, index) => (
            <div key={index} className="text-[65px]">
              ?
            </div>
          ))}
      </div>

      {isLoggedIn && (
        <div className="px-7 py-4">
          <button
          onClick={handleLogout}
          className="top-4 left-4 py-2 px-7 rounded-lg bg-[#ff0b0b] border-4 border-white text-center uppercase font-bold hover:bg-[#b12727] transition-colors duration-150"
          disabled={loading}
        >
          {loading ? "Saindo..." : "Sair"}
        </button>
        </div>
      )}

      {children}
    </>
  );
};
