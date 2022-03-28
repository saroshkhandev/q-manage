import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAnd5_AQkxAsXxpsyenIR8we8RbOKm-UCQ",
  authDomain: "pingintelligence-73ede.firebaseapp.com",
  projectId: "pingintelligence-73ede",
  storageBucket: "pingintelligence-73ede.appspot.com",
  messagingSenderId: "756002026591",
  appId: "1:756002026591:web:0c171f154a1f99e0f697ea",
  measurementId: "G-LQ0XD81X43"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

const storage = app.storage()
const auth = app.auth()

const db = app.firestore()
export { db, storage, auth }
export default app