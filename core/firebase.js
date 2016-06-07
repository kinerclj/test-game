import config from 'config';
import firebase from 'firebase';

const firebaseUrl = process.env.FIREBASE_URL || config.get('Firebase.url');
const firebaseProjectId = process.env.FIREBASE_PROJECT_ID || config.get('Firebase.projectId');
const firebaseClientEmail = process.env.FIREBASE_CLIENT_EMAIL || config.get('Firebase.clientEmail');
const firebasePrivateKey = process.env.FIREBASE_PRIVATE_KEY || config.get('Firebase.privateKey');

firebase.initializeApp({
  databaseURL: firebaseUrl,
  serviceAccount: {
    projectId: firebaseProjectId,
    clientEmail: firebaseClientEmail,
    privateKey: firebasePrivateKey,
  },
});

const db = firebase.database();

// export async function broadcastBotSong(handle, song) {
//   let ref = db.ref(`users/${handle}/bot`);
//   ref.set(song);
// }
