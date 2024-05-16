import React, { useContext, useEffect, useState } from "react";
import { LoginContext } from "../../services/LoginContext";
import { UserContext } from "../../services/UserContext";
import fetchUser from "../../services/FetchUser";
import { useNavigate } from "react-router-dom";
import { icons } from "../../assets/Icons/icons";
import { Link } from "react-router-dom";
import styles from "./LoginPage.module.css";

const LoginPage = () => {
  const [LocalUsername, setLocalUsername] = useState("");
  const [LocalPassword, setLocalPassword] = useState("");
  const [LoginError, setLoginError] = useState("");
  const { setAlreadyLogged } = useContext(LoginContext);
  const { setUser } = useContext(UserContext);
  const navigate = useNavigate();
  const [typed, setTyped] = useState(false);

  useEffect(() => {
    if ((LocalUsername !== "") & (LocalPassword !== "")) {
      setTyped(true);
    } else {
      setTyped(false);
    }
  }, [LocalUsername, LocalPassword]);
  const handleLogin = async () => {
    const localUser = await fetchUser(LocalUsername, LocalPassword);

    if (localUser) {
      setUser(localUser);
      setAlreadyLogged(true);
      navigate("/");
    } else {
      setAlreadyLogged(false);
      setLoginError("Email ou senha invalidos!");
    }
  };

  return (
    <div className={styles.login}>
      <div className={styles.leftside}>
        <img
          className={styles.loginimg}
          src="https://images.unsplash.com/flagged/photo-1576972405668-2d020a01cbfa?q=80&w=2074&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt="partida de tenis"
          srcSet=""
        />
      </div>
      <div className={styles.rightside}>
        <div className={styles.logincontainer}>
          <div className={styles.loginform}>
            <img src={icons.logo_icon} alt="logo" srcSet="" />
            <div className={styles.addloginoption}>
              <button className={styles.googlebutton}>
                <svg
                  width="38"
                  height="40"
                  viewBox="0 0 38 40"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M34.8767 20.8456C34.8767 19.4438 34.7683 18.4208 34.5338 17.36H19.2866V23.6872H28.2364C28.056 25.2596 27.0816 27.6276 24.9163 29.2188L24.8859 29.4306L29.7068 33.3516L30.0408 33.3866C33.1083 30.4123 34.8767 26.0363 34.8767 20.8456"
                    fill="#4285F4"
                  />
                  <path
                    d="M19.2855 37.5166C23.6701 37.5166 27.3511 36.001 30.0397 33.3868L24.9152 29.219C23.5439 30.2231 21.7033 30.924 19.2855 30.924C14.991 30.924 11.3461 27.9499 10.0468 23.839L9.8564 23.856L4.84357 27.929L4.77802 28.1203C7.44851 33.6898 12.9339 37.5166 19.2855 37.5166Z"
                    fill="#34A853"
                  />
                  <path
                    d="M10.0479 23.839C9.70502 22.7781 9.50661 21.6414 9.50661 20.4669C9.50661 19.2924 9.70502 18.1558 10.0298 17.0949L10.0207 16.869L4.94507 12.7306L4.77901 12.8135C3.67836 15.1247 3.04681 17.7201 3.04681 20.4669C3.04681 23.2138 3.67836 25.8091 4.77901 28.1202L10.0479 23.839"
                    fill="#FBBC05"
                  />
                  <path
                    d="M19.2856 10.0099C22.335 10.0099 24.392 11.3928 25.5649 12.5485L30.1481 7.85036C27.3333 5.1035 23.6702 3.41748 19.2856 3.41748C12.934 3.41748 7.44852 7.24413 4.77802 12.8136L10.0288 17.095C11.3462 12.9842 14.9911 10.0099 19.2856 10.0099"
                    fill="#EB4335"
                  />
                </svg>
                <span>Faça login com o Google</span>
              </button>
              <button className={styles.loginicons}>
                <svg
                  width="42"
                  height="45"
                  viewBox="0 0 42 45"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <ellipse
                    cx="21.0071"
                    cy="20.9768"
                    rx="17.7494"
                    ry="19.0148"
                    fill="url(#paint0_linear_227_313)"
                  />
                  <path
                    d="M27.617 28.5305L28.4055 23.1637H23.4732V19.6825C23.4732 18.2139 24.1609 16.7815 26.3701 16.7815H28.6139V12.2124C28.6139 12.2124 26.5784 11.8497 24.6333 11.8497C20.5694 11.8497 17.9157 14.4207 17.9157 19.0732V23.1637H13.4001V28.5305H17.9157V41.5053C18.8222 41.654 19.7497 41.7302 20.6944 41.7302C21.6392 41.7302 22.5666 41.654 23.4732 41.5053V28.5305H27.617Z"
                    fill="#F7F7F7"
                  />
                  <defs>
                    <linearGradient
                      id="paint0_linear_227_313"
                      x1="21.0071"
                      y1="1.96204"
                      x2="21.0071"
                      y2="39.8789"
                      gradientUnits="userSpaceOnUse"
                    >
                      <stop stopColor="#18ACFE" />
                      <stop offset="1" stopColor="#0163E0" />
                    </linearGradient>
                  </defs>
                </svg>
              </button>
              <button className={styles.loginicons}>
                <svg
                  width="42"
                  height="43"
                  viewBox="0 0 42 43"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M38.678 21.4692C38.678 31.6045 30.7344 39.8302 20.9268 39.8302C11.1192 39.8302 3.17554 31.6045 3.17554 21.4692C3.17554 11.3247 11.1192 3.10815 20.9268 3.10815C30.7344 3.10815 38.678 11.3247 38.678 21.4692Z"
                    fill="#283544"
                  />
                  <path
                    d="M29.2472 16.8232C29.1503 16.8816 26.8444 18.1151 26.8444 20.8501C26.9531 23.9692 29.7544 25.063 29.8024 25.063C29.7544 25.1214 29.3795 26.5531 28.269 28.0538C27.3878 29.3465 26.4096 30.6498 24.9243 30.6498C23.5115 30.6498 23.0043 29.7883 21.3741 29.7883C19.6234 29.7883 19.128 30.6498 17.7876 30.6498C16.3023 30.6498 15.2517 29.2766 14.3224 27.9961C13.1151 26.32 12.0889 23.6898 12.0527 21.1643C12.0283 19.8261 12.2945 18.5106 12.9702 17.3932C13.9239 15.8333 15.6266 14.7744 17.486 14.7395C18.9106 14.6932 20.1786 15.6823 21.048 15.6823C21.8813 15.6823 23.439 14.7395 25.2016 14.7395C25.9623 14.7402 27.991 14.9611 29.2472 16.8232ZM20.9275 14.4723C20.6739 13.2502 21.3741 12.028 22.0262 11.2485C22.8594 10.3057 24.1754 9.66577 25.3102 9.66577C25.3827 10.8879 24.9235 12.0865 24.1029 12.9594C23.3666 13.9022 22.0986 14.6119 20.9275 14.4723Z"
                    fill="white"
                  />
                </svg>
              </button>
            </div>
            <div className={styles.form}>
              <div className={styles.questions}>
                <div className={styles.inputs}>
                  <label htmlFor="userEmail">
                    Insira seu usuário ou e-mail
                  </label>
                  <input
                    id="userEmail"
                    type="text"
                    placeholder="Usuário ou e-mail"
                    value={LocalUsername}
                    onChange={(e) => setLocalUsername(e.target.value)}
                  />
                </div>
                <div className={styles.inputs}>
                  <label htmlFor="password">Insira sua senha</label>
                  <input
                    id="password"
                    type="password"
                    placeholder="Senha"
                    value={LocalPassword}
                    onChange={(e) => setLocalPassword(e.target.value)}
                  />
                </div>
              </div>
              <div className={styles.extraquest}>
                <div className={styles.leftquest}>
                  <p>Não tem uma conta?</p>
                  <Link to={"/signup"}>
                    <p className={styles.signup}>Cadastre-se</p>
                  </Link>
                </div>
                <div className={styles.rightquest}>
                  <Link to={"/ForgotPassword"}>
                    <p>Esqueceu sua senha?</p>
                  </Link>
                </div>
              </div>
              <p className={styles.errormsg}>{LoginError}</p>
              <button
                className={styles.loginbtn}
                onClick={() => {
                  if (typed) handleLogin();
                }}
                style={{
                  backgroundColor: typed ? "#3694e7" : "#526581",
                }}
              >
                Login
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
