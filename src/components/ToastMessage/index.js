import { toast } from "react-toastify";
import "./toast.css";

export function toastMessage(type, toastHeading, toastMessage) {
  switch (type) {
    case "error":
      return toast.error(
        <div className="display-flex">
          <div className="toast-error">
            <p className="error-toast-heading">Error</p>
            <p>{toastHeading}</p>
            <p>{toastMessage}</p>
          </div>
        </div>,
        {
          position: toast.POSITION.TOP_CENTER,
          className: "toast-error",
        }
      );
    case "success":
      return toast.success(
        <div className="display-flex">
          <div className="toast-success">
            <p className="success-toast-heading">Success</p>
            <p>{toastHeading}</p>
            <p>{toastMessage}</p>
          </div>
        </div>,
        {
          position: toast.POSITION.TOP_CENTER,
          className: "toast-success",
        }
      );
    default:
      return toast.success();
  }
}
