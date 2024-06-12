// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDwqlZROBZ-wacyyIr80w4mJBtcjLOBGks",
  authDomain: "netflix-clone-6538b.firebaseapp.com",
  projectId: "netflix-clone-6538b",
  storageBucket: "netflix-clone-6538b.appspot.com",
  messagingSenderId: "984089175944",
  appId: "1:984089175944:web:96fb319e1080965c043c3d",
  measurementId: "G-Y9NM11L8TZ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);