// Scripts for firebase and firebase messaging
importScripts(
  "https://www.gstatic.com/firebasejs/9.0.0/firebase-app-compat.js"
);
importScripts(
  "https://www.gstatic.com/firebasejs/9.0.0/firebase-messaging-compat.js"
);

// Initialize the Firebase app in the service worker by passing the generated config
var firebaseConfig = {
  apiKey: "AIzaSyAZ-gVtW_JBT7Pdb7v4Cnhdq37j8H5eA1M",
  authDomain: "fir-client02.firebaseapp.com",
  projectId: "fir-client02",
  storageBucket: "fir-client02.appspot.com",
  messagingSenderId: "72601869699",
  appId: "1:72601869699:web:f1d87755a1cc9371806ab6",
};

firebase.initializeApp(firebaseConfig);

// Retrieve firebase messaging
const messaging = firebase.messaging();

messaging.onBackgroundMessage(function (payload) {
  console.log("Received background message ", payload);
  const notificationTitle = payload.notification.title;
  const notificationOptions = {
    body: payload.notification.body,
    icon: "https://freeiconshop.com/wp-content/uploads/edd/notification-flat.png",
  };

  self.registration.showNotification(notificationTitle, notificationOptions);

  self.addEventListener("notificationclick", function (event) {
    console.log("clicked on notification", payload);
    const notification = payload?.data;
    event.notification.close();
    event.waitUntil(clients.openWindow("/example.com"));
  });
});
