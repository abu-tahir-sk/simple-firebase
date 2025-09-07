import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import auth from "../../firebase/firebase.init";


const Login = () => {
  const provider = new GoogleAuthProvider();
 
  const handleGoogleSignIn = () => {
    signInWithPopup(auth,provider)
    .then(result =>{
      console.log(result)
    })
    .catch(error => {
      console.log('error',error)
    })
  };
  return (
    <div style={{ width: "100%", height: "100vh" }}>
      <button onClick={handleGoogleSignIn}>Login for google</button>
    </div>
  );
};

export default Login;
