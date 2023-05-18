import style from "./Login.module.css";
import googleIcon from "../../assets/google.svg";
import { useAuth } from "../../hooks/useAuth";


function Login() {
  const {signInWithGoogle} = useAuth();

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
