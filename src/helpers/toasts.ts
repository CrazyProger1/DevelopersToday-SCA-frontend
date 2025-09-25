import { Bounce, toast } from "react-toastify";

export const notify = (message: string, type: "success" | "error" = "success") => {
  toast(message, {
    position: "bottom-right",
    autoClose: 3000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: "light",
    transition: Bounce,
    type: type,
  });
};
