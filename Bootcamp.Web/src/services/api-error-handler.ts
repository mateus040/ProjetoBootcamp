import { isAxiosError } from "axios";
import toast from "react-hot-toast";

export default function apiErrorHandler(error: any): void {
  if (
    isAxiosError(error) &&
    error.response &&
    error.response.status >= 400 &&
    error.response.status < 500
  ) {
    toast.error(error.response.data.error);
  } else {
    toast.error("Ocorreu um erro, tente novamente mais tarde!");
  }
}
