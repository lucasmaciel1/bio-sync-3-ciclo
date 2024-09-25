import { initializeApp } from 'firebase/app';
import { getAnalytics } from 'firebase/analytics';
import { getAuth } from 'firebase/auth';
import { ReCaptchaV3Provider, initializeAppCheck } from 'firebase/app-check';


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
const analytics = getAnalytics(app);
const auth = getAuth(app);
const appCheck = initializeAppCheck(app, {
  provider: new ReCaptchaV3Provider('6LdurE4qAAAAAC15q3lHh0evyR8lIVpyrOXi-k5w'),
  isTokenAutoRefreshEnabled: true
});

export { appCheck, app, analytics, auth };