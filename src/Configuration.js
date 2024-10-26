// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBjdNeYZCV0Q-z476hRKw2MdDtqln02deg",
  authDomain: "fir-2edac.firebaseapp.com",
  databaseURL: "https://fir-2edac-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "fir-2edac",
  storageBucket: "fir-2edac.appspot.com",
  messagingSenderId: "203589275828",
  appId: "1:203589275828:web:4b6e5728f9fd52705dc7e1",
  measurementId: "G-P78Q8QMZJW"
};

// Initialize Firebase
//const app = initializeApp(firebaseConfig);
//const analytics = getAnalytics(app);

const cog = initializeApp(firebaseConfig);

export default cog;