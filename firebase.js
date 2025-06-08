
// إعداد Firebase وربط Firestore
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-app.js";
import {
  getFirestore,
  collection,
  addDoc,
  getDocs
} from "https://www.gstatic.com/firebasejs/10.12.0/firebase-firestore.js";

const firebaseConfig = {
  apiKey: "AIzaSyBeQ08lRIJLHCnhAlHL-32g6hYPPenm6BM",
  authDomain: "doody-store.firebaseapp.com",
  projectId: "doody-store",
  storageBucket: "doody-store.firebasestorage.app",
  messagingSenderId: "372553101001",
  appId: "1:372553101001:web:ff92bdbd60e636fb106718",
  measurementId: "G-J8MX415W2Q"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

// دالة إضافة منتج
window.addProduct = async function () {
  const name = document.getElementById("name").value;
  const price = document.getElementById("price").value;
  const tracking = document.getElementById("tracking").value;

  const product = { name, price, tracking };

  await addDoc(collection(db, "products"), product);
  alert("تمت الإضافة!");
};
