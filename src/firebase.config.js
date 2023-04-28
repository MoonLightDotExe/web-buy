import { initializeApp } from 'firebase/app'
import { getFirestore } from 'firebase/firestore'

const firebaseConfig = {
  apiKey: 'AIzaSyD7tuLeLCRbe5goYFYj4-VdCAK9cmMnQIk',
  authDomain: 'web-buy.firebaseapp.com',
  projectId: 'web-buy',
  storageBucket: 'web-buy.appspot.com',
  messagingSenderId: '985582148052',
  appId: '1:985582148052:web:0b6ee875b7837edd115e41',
}

const app = initializeApp(firebaseConfig)
export const db = getFirestore()
