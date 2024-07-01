// Import the functions you need from the SDKs you need
import { initializeApp} from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB0hRchYBFL7ik_lvDMei3FL5QMLoX3MlU",
  authDomain: "castle-9db52.firebaseapp.com",
  projectId: "castle-9db52",
  storageBucket: "castle-9db52.appspot.com",
  messagingSenderId: "628390359626",
  appId: "1:628390359626:web:985abeb0dc6a7abe5c2cb3"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;