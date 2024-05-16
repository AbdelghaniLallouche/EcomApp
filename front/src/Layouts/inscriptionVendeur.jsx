import { useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';
import './Styling/signupvendeur.css';
import { baseUrl } from "../public/Svgs";

const InscriptionV = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [companyName, setCompanyName] = useState("");
  const [companyDescription, setCompanyDescription] = useState("");
  const [postalCode, setPostalCode] = useState("");
  const [country, setCountry] = useState("");
  const [passwordShown, setPasswordShown] = useState(true);
  const [confirmPasswordShown, setConfirmPasswordShown] = useState(true);

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

  const handleCompanyNameChange = (event) => {
    setCompanyName(event.target.value);
  };

  const handleCompanyDescriptionChange = (event) => {
    setCompanyDescription(event.target.value);
  };

  const handlePostalCodeChange = (event) => {
    setPostalCode(event.target.value);
  };

  const handleCountryChange = (event) => {
    setCountry(event.target.value);
  };

  const togglePasswordVisibility = () => {
    setPasswordShown(!passwordShown);
  };

  const toggleConfirmPasswordVisibility = () => {
    setConfirmPasswordShown(!confirmPasswordShown);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try{
      const response = await fetch(`${baseUrl}/vendeurs`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          nom: name,
          email: email,
          motDePasse: password,
          nomSociete: companyName,
          descriptionSociete: companyDescription,
          codePostal: postalCode,
          pays: country,
        }),
      });
      const data = await response.json();
      if(!data.ok){
        alert(data.message)
      }else{
        alert("Inscription réussie")
      }
    }catch(err){
      alert(err)
    }
  
  };

  return (
    <div className="sign-main">
      <div className="sign">
        <div className="sign-container">
          <div className="sign-center">
            <h2>S'inscrire</h2>
            <form onSubmit={handleSubmit}>
              <input
                type="text"
                placeholder="Nom"
                value={name}
                className="inppp"
                onChange={handleNameChange}
              />
              <input
                type="email"
                placeholder="Email"
                className="inppp"
                value={email}
                onChange={handleEmailChange}
              />
              <div className="password-container">
                <input
                  type={passwordShown ? "text" : "password"}
                  placeholder="Mot de passe"
                  className="inppp"
                  value={password}
                  onChange={handlePasswordChange}
                />
                <FontAwesomeIcon
                  icon={passwordShown ? faEye : faEyeSlash}
                  onClick={togglePasswordVisibility}
                  className="toggle-password-icon"
                />
              </div>
              <div className="password-container">
  <input
    type={confirmPasswordShown ? "text" : "password"}
    placeholder="Confirmer le mot de passe"
    className="inppp"
    value={confirmPassword}
    onChange={handleConfirmPasswordChange}
  />
  <FontAwesomeIcon
    icon={confirmPasswordShown ? faEye : faEyeSlash}
    onClick={toggleConfirmPasswordVisibility}
    className="toggle-password-icon"
  />
</div>
              <input
                type="text"
                placeholder="Nom de la société"
                className="inppp"
                value={companyName}
                onChange={handleCompanyNameChange}
              />
              <input
                type="text"
                placeholder="Code postal"
                className="inppp"
                value={postalCode}
                onChange={handlePostalCodeChange}
              />
              <input
                type="text"
                placeholder="Pays"
                className="inppp"
                value={country}
                onChange={handleCountryChange}
              />
              <input
                type="text"
                placeholder="Description de la société"
                className="inppp"
                value={companyDescription}
                onChange={handleCompanyDescriptionChange}
              />
              <div className="sign-center-options">
                <div className="continue-div">
                  <input type="checkbox" id="continue-checkbox" />
                  <label htmlFor="continue-checkbox">
                    En continuant, vous acceptez les conditions d'utilisation & politique de confidentialité
                  </label>
                </div>
              </div>
              <div className="sign-center-buttons">
                <button type="submit">S'inscrire</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InscriptionV;
