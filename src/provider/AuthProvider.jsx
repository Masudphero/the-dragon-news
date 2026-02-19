import { createContext, useEffect, useState } from "react";
import { GoogleAuthProvider, GithubAuthProvider, signInWithPopup } from "firebase/auth";
import app from "../firebase/firebase.config";
import { 
  createUserWithEmailAndPassword, 
  getAuth, 
  onAuthStateChanged, 
  signInWithEmailAndPassword, 
  signOut
} from "firebase/auth";

export const AuthContext = createContext();
const auth = getAuth(app);

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  const createNewUser = (email, password) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };

  const logOut=()=>{
    return signOut(auth)
  }

    const signInUser = (email, password) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password)
      .finally(() => setLoading(false));
  };



const handleGoogleLogin = () => {
  const provider = new GoogleAuthProvider();
  return signInWithPopup(auth, provider).then(result => result.user);
};

const handleGithubLogin = () => {
  const provider = new GithubAuthProvider();
  return signInWithPopup(auth, provider).then(result => result.user);
};


  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, currentUser => {
      setUser(currentUser);
      setLoading(false);
    });

    return () => unsubscribe();
  }, []);

  const authInfo = {
    user,
    setUser,
    createNewUser,
    loading,
    logOut,
    signInUser,
    handleGithubLogin,
    handleGoogleLogin
  };

  return (
    <AuthContext.Provider value={authInfo}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
