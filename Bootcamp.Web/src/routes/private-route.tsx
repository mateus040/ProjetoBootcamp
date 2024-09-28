import { Navigate } from "react-router-dom";

interface Props {
  children: React.ReactNode;
}

export default function PrivateRoute({ children }: Props) {
  const userId = sessionStorage.getItem("user_id");

  if (!userId) {
    return <Navigate to="/login" />;
  }

  return <>{children}</>;
}
