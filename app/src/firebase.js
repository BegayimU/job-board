// firebase.js
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"; // <-- добавляем
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyDQGLpfoE01eSvpe0QNQYORYUoCV-WDs3c",
  authDomain: "job-board-53521.firebaseapp.com",
  databaseURL: "https://job-board-53521-default-rtdb.firebaseio.com",
  projectId: "job-board-53521",
  storageBucket: "job-board-53521.firebasestorage.app",
  messagingSenderId: "166486512088",
  appId: "1:166486512088:web:fb7ef52a7e5dd4a260a2ad",
  measurementId: "G-99XTXZ7P2P"
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

// **Добавляем Firestore**
export const db = getFirestore(app);