import { toast,Bounce } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

// Initialize the toast container, typically at the root of your app
type NotifyType = "default" | "success" | "error" | "warn" | "info" | "custom";
type NotifyMessage = string;

export const notify = (type: NotifyType, message: NotifyMessage) => {
  switch (type) {
    case "default":
      toast(message);
      break;
    case "success":
      toast.success(message, {
        position: "top-center",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: false,
        draggable: true,
        progress: undefined,
        theme: "dark",
        transition: Bounce,
      });
      break;
    case "error":
      toast.error(message, {
        position: "top-left"
      });
      break;
    case "warn":
      toast.warn(message, {
        position: "bottom-left"
      });
      break;
    case "info":
      toast.info(message, {
        position: "bottom-center"
      });
      break;
    case "custom":
      toast(message, {
        position: "bottom-right",
        className: 'foo-bar'
      });
      break;
    default:
      toast(message);
  }
};
