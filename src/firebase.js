import { initializeApp } from "firebase/app";
import { getMessaging, getToken, onMessage } from "firebase/messaging";
import { toastMessage } from "./components/ToastMessage";
import { getAnalytics } from "firebase/analytics";
const firebaseConfig = {
  apiKey: "AIzaSyAZ-gVtW_JBT7Pdb7v4Cnhdq37j8H5eA1M",
  authDomain: "fir-client02.firebaseapp.com",
  projectId: "fir-client02",
  storageBucket: "fir-client02.appspot.com",
  messagingSenderId: "72601869699",
  appId: "1:72601869699:web:f1d87755a1cc9371806ab6",
  measurementId: "G-C5X0T60P0Q",
};

export const onMessageListener = () =>
  new Promise((resolve) => {
    onMessage(messaging, (payload) => {
      resolve(payload);
    });
  });

initializeApp(firebaseConfig);
export const getMessagingToken = (setTokenFound) => {
  return getToken(messaging, {
    vapidKey:
      "BD3zPMjcZ62e0tFixySkeAHblzKYBn2976UGHMjInIFkNl6MQXKEvnT-0NBe7fv-LCxGKbsydP2wU2jSa48eRAw",
  })
    .then((currentToken) => {
      if (currentToken) {
        console.log("current token for client: ", currentToken);
        setTokenFound(true);
        // Track the token -> client mapping, by sending to backend server
        // show on the UI that permission is secured
      } else {
        console.log(
          "No registration token available. Request permission to generate one."
        );
        setTokenFound(false);
        // shows on the UI that permission is required
      }
    })
    .catch((err) => {
      console.log("An error occurred while retrieving token. ", err);
      // catch error while creating client token
    });
};

const firebaseApp = initializeApp(firebaseConfig);
const analytics = getAnalytics(firebaseApp);
const messaging = getMessaging(firebaseApp);
