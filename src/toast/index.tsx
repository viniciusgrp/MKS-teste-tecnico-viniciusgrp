import { toast } from "react-toastify";


export const addCartToast = () => toast.success("Login realizado com sucesso", {
    position: "top-right",
    autoClose: 1200,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
  });