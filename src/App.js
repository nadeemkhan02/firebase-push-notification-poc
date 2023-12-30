import { useState } from "react";
import { getMessagingToken, onMessageListener } from "./firebase";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { toastMessage } from "./components/ToastMessage";

function App() {
  const [isTokenFound, setTokenFound] = useState(false);
  getMessagingToken(setTokenFound);


  onMessageListener()
    .then((payload) => {
      console.log(payload, "<<");
      toast.success(
        <div>
          <p>{payload.data.title}</p>
          <p style={{ marginTop: "4px" }}>{payload.data.body}</p>
        </div>,
        {
          position: toast.POSITION.TOP_RIGHT,
        }
      );
    })
    .catch((err) => console.log("failed: ", err));

  return (
    <div className="App">
      <ToastContainer
        hideProgressBar={true}
        newestOnTop={false}
        limit={1}
        autoClose={3000}
      />
      <h1>
        {isTokenFound && " Notification permission enabled 👍🏻 "}
        {!isTokenFound && " Need notification permission ❗️ "}
      </h1>
    </div>
  );
}

export default App;
