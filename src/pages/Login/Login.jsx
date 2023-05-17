import style from "./Login.module.css";
import googleIcon from "../../assets/google.svg";
import { auth, provider } from "../../config/firebase-config";
import { signInWithPopup } from "firebase/auth";

function Login() {

  const signInWithGoogle = async () => {
    const results = await signInWithPopup(auth, provider);
    console.log(results);
  };

  return (
    <div className={style.loginMain}>
      <h1 className={style.loginTitle}>Sign in with Google to continue</h1>
      <button className={style.signIn} onClick={signInWithGoogle}>
        <img src={googleIcon} alt="" />
        Sign in with google
      </button>
    </div>
  );
}

export default Login;
