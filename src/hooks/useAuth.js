import { auth, provider } from "../config/firebase-config";
import { signInWithPopup, signOut } from "firebase/auth";
import { useNavigate } from "react-router-dom";

export const useAuth = () => {
  const navigate = useNavigate();

  // sign with google
  const signInWithGoogle = async () => {
    try {
      const results = await signInWithPopup(auth, provider);
      console.log(results);
      navigate("/");
    } catch (e) {
      console.log(e);
    }
  };

  // signOut user
  const signOutwithClick = async () => {
    try {
      await signOut(auth);
      navigate("/");
    } catch (e) {
      console.log(e);
    }
  };

  return { signInWithGoogle, signOutwithClick };
};

