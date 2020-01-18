import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';
import 'firebase/functions';
import { config } from '../../firebaseConfig';

// firebase.initializeApp(config);

!firebase.apps.length ? firebase.initializeApp(config) : firebase.app();

export { firebase };
