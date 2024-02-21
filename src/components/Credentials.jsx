import React, { useState } from "react";
import "./Credentials.css";
import { useLocation, Link } from "react-router-dom";

const Credential = () => {
  let pathName = useLocation().pathname === "/signup" ? true : false;

  const [showPassword, setshowPassword] = useState(false);
  const isShow = () => {
    setshowPassword(!showPassword);
  };
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");

  return (
    <>
      <div className="maindiv">
        <div className="header">
          <img
            src="./src/assets/book-solid.svg"
            width="30px"
            height="30px"
          ></img>
          <div style={{ display: "flex", gap: "10px", alignItems: "center" }}>
            <p>
              {pathName ? "Already have an account?" : "Don't have an account?"}
            </p>
            {pathName ? (
              <Link to="/login">
                <button id="btn1">Log in</button>
              </Link>
            ) : (
              <Link to="/signup">
                <button id="btn1">Sign up</button>
              </Link>
            )}
          </div>
        </div>
        <div className="loginform">
          <h1
            style={{
              color: "#662D91",
              marginBottom: "20px",
              fontSize: "4vh",
              marginTop: pathName && "-15px",
            }}
          >
            {pathName ? "Create your account" : "Login to eLearnJunction!!"}
          </h1>
          <form>
            {pathName && (
              <div className="inputxt">
                <label>Full name*</label>
                <input
                  type="text"
                  placeholder="Enter your name"
                  className="txt"
                  required
                  autoFocus="true"
                  onChange={(event) => setName(event.target.value)}
                />
              </div>
            )}

            <br></br>
            <div className="inputxt">
              <label>Email*</label>
              <input
                type="email"
                placeholder="Enter your email"
                className="txt"
                required
                autoFocus="true"
                onChange={(event) => setEmail(event.target.value)}
              />
            </div>
            <br></br>
            <div className="inputxt">
              <label>Password*</label>
              <input
                type={showPassword ? "text" : "password"}
                placeholder="Enter your password"
                className="txt"
                required
                autoFocus="true"
                onChange={(event) => setPassword(event.target.value)}
              />
              <img
                src={
                  showPassword
                    ? "./src/assets/closeeye.svg"
                    : "./src/assets/eye.svg"
                }
                onClick={isShow}
                className="eyeimg"
              ></img>
            </div>
            <br></br>
            <button style={{ fontSize: pathName && "14px" }} className="logbtn">
              {pathName ? "Create an account" : "Login"}
            </button>
          </form>
          <p className="forget">{!pathName && "Forgot your password?"}</p>
        </div>
      </div>
    </>
  );
};

export default Credential;
