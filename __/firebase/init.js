if (typeof firebase === 'undefined') throw new Error('hosting/init-error: Firebase SDK not detected. You must include it before /__/firebase/init.js');
firebase.initializeApp({
	"apiKey": "AIzaSyBsd60iLa0xBtvR9EqcpON0kBMrLtQM_HE",
	"databaseURL": "https://brain-leader-company.firebaseio.com",
	"storageBucket": "brain-leader-company.appspot.com",
	"authDomain": "brain-leader-company.firebaseapp.com",
	"messagingSenderId": "905208705577",
	"projectId": "brain-leader-company"
});