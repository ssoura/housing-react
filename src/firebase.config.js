import { initializeApp } from 'firebase/app'
import { getFirestore, connectFirestoreEmulator } from 'firebase/firestore'
import { connectAuthEmulator, getAuth } from 'firebase/auth'
import { getStorage, connectStorageEmulator } from 'firebase/storage'

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC0j0nJV2N19gHD9QQVIe3rT0eRYnCBlFY",
  authDomain: "housing-86d74.firebaseapp.com",
  projectId: "housing-86d74",
  storageBucket: "housing-86d74.appspot.com",
  messagingSenderId: "832936527815",
  appId: "1:832936527815:web:896b70d6f86849a0e53be2"
}

// Initialize Firebase
initializeApp(firebaseConfig)

export const db = getFirestore()
export const auth = getAuth()
// const storage = getStorage()

// if (process.env.NODE_ENV !== 'production') {
//   connectFirestoreEmulator(db, 'localhost', 8080)
//   connectAuthEmulator(auth, 'http://localhost:9099')
//   connectStorageEmulator(storage, 'localhost', 9199)
// }
