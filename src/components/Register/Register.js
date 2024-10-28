import "./Register.scss";
import { useHistory } from "react-router-dom";
import axios from "axios";
import { useEffect, useState } from "react";
import { toast } from "react-toastify";

const Register = (props) => {
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  let history = useHistory();

  const handleLogin = () => {
    history.push("/login");
  };

  useEffect(() => {
    // axios.get("http://localhost:8080/api/test-api").then((data) => {
    //   console.log(">>> check data axios: ", data);
    // });
  }, []);

  const isValidInput = () => {
    if (!email) {
      toast.error("Email is required!");
      return false;
    }
    if (!phone) {
      toast.error("Phone is required!");
      return false;
    }
    if (!password) {
      toast.error("Password is required!");
      return false;
    }

    if (password != confirmPassword) {
      toast.error("Passwords do not match!");
      return false;
    }
    let regx = /\S+@\S+\.\S+/;
    if (!regx.test(email)) {
      toast.error("Invalid Email!");
      return false;
    }

    return true;
  };

  const handleRegister = () => {
    let check = isValidInput();

    let userData = { email, phone, username, password };
    console.log(">>> check user data", userData);
  };
  return (
    <div className="register-container">
      <div className="container">
        <div className="row px-3 px-sm-0">
          <div className="content-left col-12 d-none col-sm-7 d-sm-block">
            <div className="brand">H25639SRV</div>
            <div className="detail">khong muon hoc it dau huhu</div>
          </div>
          <div className="content-right col-sm-5 col-12 d-flex flex-column gap-3 py-3">
            <div className="brand d-sm-5 d-sm-none">H25639SRV</div>
            <div className="form-group">
              <label>Email:</label>
              <input
                type="text"
                className="form-control"
                placeholder="Email address"
                value={email}
                onChange={(event) => setEmail(event.target.value)}
              />
            </div>
            <div className="form-group">
              <label>Phone number:</label>
              <input
                type="text"
                className="form-control"
                placeholder="Phone number"
                value={phone}
                onChange={(event) => setPhone(event.target.value)}
              />
            </div>
            <div className="form-group">
              <label>Username:</label>
              <input
                type="text"
                className="form-control"
                placeholder="Username"
                value={username}
                onChange={(event) => setUsername(event.target.value)}
              />
            </div>
            <div className="form-group">
              <label>Password:</label>
              <input
                type="password"
                className="form-control"
                placeholder="Password"
                value={password}
                onChange={(event) => setPassword(event.target.value)}
              />
            </div>
            <div className="form-group">
              <label>Re-enter your password:</label>
              <input
                type="password"
                className="form-control"
                placeholder="Re-enter your password"
                value={confirmPassword}
                onChange={(event) => setConfirmPassword(event.target.value)}
              />
            </div>

            <button
              className="btn btn-primary"
              onClick={() => handleRegister()}
            >
              Register
            </button>

            <hr />
            <div className="text-center">
              <button className="btn btn-success" onClick={() => handleLogin()}>
                Already have an account?
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
