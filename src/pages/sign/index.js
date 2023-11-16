import React from "react";
import Header from "../../components/header";
import Footer from "../../components/footer";
import { useDispatch } from 'react-redux';
import { useState } from "react";
import { useNavigate } from 'react-router-dom';
import { loginApi , getUserData} from "../../api/apiReq";

const SignIn = () => {


  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const navigate = useNavigate();
  const dispatch = useDispatch();




  const login = async (e) => {
    try {
      e.preventDefault();
      const response = await loginApi({ email, password });
      if (response.status === 200) {
        const data = await getUserData(response.body.token);

        if (data.status === 200) {
          dispatch({
            type: "user/userEditandDisplay",
            payload: {
              data: { ...data.body, token: response.body.token },
            },
          });
          navigate("/signin/profile");
        } else {
          setError(data.message);
        }
      } else if (response.status === 400) {
        setError(response.message);
      }
    } catch (error) {
      console.error('Erreur de connexion', error);
    
  }
  };


    return (
    <div>
    <Header/>
    <main className="main bg-dark">
      <section className="sign-in-content">
        <i className="fa fa-user-circle sign-in-icon"></i>
        <h1>Sign In</h1>
        <form onSubmit={login}>
          <div className="input-wrapper">
            <label htmlFor="email">Username</label
            ><input type="email" id="email" name="email" onChange={(event) => setEmail(event.target.value)} />
          </div>
          <div className="input-wrapper">
            <label htmlFor="password">Password</label
            ><input type="password" id="password" onChange={(event) => setPassword(event.target.value)}/>
          </div>
          <div className="input-remember">
            <input type="checkbox" id="remember-me" /><label htmlFor="remember-me"
              >Remember me</label
            >
            {error && <div style={{ color: 'red' }}>{error}</div>}
          </div>
          
          
          <button className="sign-in-button">Sign In</button> 
        </form>
      </section>
    </main>
    <Footer />
    </div>
);

}
  
  export default SignIn;