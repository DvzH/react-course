import { firebase, googleAuthProvider } from "../firebase/firebase";

export const Login=(uid)=>({
    type:'LOGIN',
    uid
});

export const startLogin = () => {
    debugger;
    return () => {
        return firebase.auth().signInWithPopup(googleAuthProvider);
    };
};

export const Logout=()=>({
    type:'LOGOUT'
})

export const startLogout = () => {
    debugger;
    return () => {
        return firebase.auth().signOut();
    };
};