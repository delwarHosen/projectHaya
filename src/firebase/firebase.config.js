// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_apiKey,
  authDomain: import.meta.env.VITE_authDomain,
  projectId: import.meta.env.VITE_projectId,
  storageBucket: import.meta.env.VITE_storageBucket,
  messagingSenderId: import.meta.env.VITE_messagingSenderId,
  appId: import.meta.env.VITE_appId
  // apiKey: "AIzaSyCuRoN4CDBbgcsAniRvyEu9I71OLnh_hrc",
  // authDomain: "haya-shop-b329b.firebase.com",
  // projectId: "haya-shop-b329b",
  // storageBucket: "haya-shop-b329b.appspot.com",
  // messagingSenderId: "697877671082",
  // appId: "1:697877671082:web:ec0800d926a44d2ea2f4d3"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
