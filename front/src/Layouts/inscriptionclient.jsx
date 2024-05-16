import { useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import './Styling/inscriclient.css';
import { baseUrl } from "../public/Svgs";

const Inscription = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(true);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const togglePasswordVisibility = (field) => {
    if (field === "password") {
      setShowPassword(!showPassword);
    } else if (field === "confirmPassword") {
      setShowConfirmPassword(!showConfirmPassword);
    }
  };

  const handleNameChange = (event) => {
    setName(event.target.value);
  };

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleConfirmPasswordChange = (event) => {
    setConfirmPassword(event.target.value);
  };

  const handleSubmit = async  (event) => {
    event.preventDefault();
    try{
      const response = await fetch(`${baseUrl}/clients`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          nom: name,
          email: email,
          motDePasse: password,
          role : 1,
        }),
      });
      const data = await response.json();
      console.log(data);
    }
    catch(err){
      console.log(err)
    }
    
  };

  return (
    <div className="login-main">
      <div className="login">
        <div className="login-container">
          <div className="login-center">
            <h2>S'inscrire</h2>
            <form onSubmit={handleSubmit}>
              <input
                type="text"
                className="inp"
                placeholder="Nom"
                value={name}
                onChange={handleNameChange}
              />
              <input
                type="email"
                className="inp"
                placeholder="Email"
                value={email}
                onChange={handleEmailChange}
              />
              <div className="pass-input-div">
                <input
                  type={showPassword ? "text" : "password"}
                  placeholder="Mot de passe"
                  value={password}
                  className="inp"
                  onChange={handlePasswordChange}
                />
                {showPassword ? (
                  <FaEye onClick={() => togglePasswordVisibility("password")} />
                ) : (
                  <FaEyeSlash onClick={() => togglePasswordVisibility("password")} />
                )}
              </div>
              <div className="pass-input-div">
                <input
                  type={showConfirmPassword ? "text" : "password"}
                  placeholder="Confirmer le mot de passe"
                  className="inp"
                  value={confirmPassword}
                  onChange={handleConfirmPasswordChange}
                />
                {showConfirmPassword ? (
                  <FaEye onClick={() => togglePasswordVisibility("confirmPassword")} />
                ) : (
                  <FaEyeSlash onClick={() => togglePasswordVisibility("confirmPassword")} />
                )}
              </div>
              <div className="login-center-options">
                <div className="continue-div">
                  <input type="checkbox" id="continue-checkbox" />
                  <label htmlFor="continue-checkbox">
                    En continuant, vous acceptez les conditions d'utilisation & politique de confidentialité
                  </label>
                </div>
              </div>
              <div className="login-center-buttons">
                <button type="submit">S'inscrire</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Inscription;
