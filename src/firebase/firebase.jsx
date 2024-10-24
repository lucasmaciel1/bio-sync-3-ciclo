// src/firebase.js
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';
import { initializeAppCheck, ReCaptchaV3Provider } from 'firebase/app-check';

const firebaseConfig = {
    apiKey: "AIzaSyAa8atbXwwofrRgmHHXTcnvAiyVvMv2Oyo",
    authDomain: "biosync-32e95.firebaseapp.com",
    projectId: "biosync-32e95",
    storageBucket: "biosync-32e95.appspot.com",
    messagingSenderId: "873929644381",
    appId: "1:873929644381:web:d4f9bf98d2d32103c9b0b4",
    measurementId: "G-T1RVV2X796"
};

const app = initializeApp(firebaseConfig);

// Initialize App Check
initializeAppCheck(app, {
  provider: new ReCaptchaV3Provider('6LceH2IqAAAAACmtimxf5YJ9xFIMiHjN02rPp1Sj'),
  isTokenAutoRefreshEnabled: true
});

// Initialize Firebase Authentication
const auth = getAuth(app);

const db = getFirestore(app);

export { auth, db };