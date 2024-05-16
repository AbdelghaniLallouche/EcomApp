import { useState } from "react";
import './Styling/reclamation.css';
import { FaUser, FaEnvelope, FaTag, FaExclamationCircle } from 'react-icons/fa';

const ContactForm = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [id, setId] = useState("");
  const [product, setProduct] = useState("");
  const [subject, setSubject] = useState(""); 
  
  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name === "name") {
      setName(value);
    } else if (name === "email") {
      setEmail(value);
    } else if (name === "id") {
      setId(value);
    } else if (name === "product") {
      setProduct(value);
    } else if (name === "subject") {
      setSubject(value);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  
  };
  
  return (
    <div className="contact-form-main">
      <div className="contact-form">
        <div className="contact-form-container">
          <div className="contact-form-center">
            <h2>Contactez-Nous</h2>
            <p>Rencontrez-vous un problème avec l'un de nos produits ? Nous sommes là pour vous aider ! Veuillez remplir le formulaire de réclamation ci-dessous :</p>
            <form onSubmit={handleSubmit}>
              <div className="input-icon-container">
                <FaUser className="input-icon" />
                <input type="text" className="inpp" name="name" placeholder="Nom" value={name} onChange={handleChange} />
              </div>
              <div className="input-icon-container">
                <FaEnvelope className="input-icon" />
                <input type="email" name="email" className="inpp" placeholder="Email" value={email} onChange={handleChange} />
              </div>
              <div className="input-icon-container">
                <FaTag className="input-icon" />
                <input type="text" name="id" className="inpp" placeholder="Id-Produit" value={id} onChange={handleChange} />
              </div>
              <div className="input-icon-container">
                <FaExclamationCircle className="input-icon" />
                <textarea name="subject" className="inpp" placeholder="Votre Probléme" value={subject} onChange={handleChange}></textarea>
              </div>
              <div className="contact-form-center-buttons">
                <button type="submit">Envoyer</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactForm;