import React, { useState } from 'react';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    phoneNumber: '',
    email: '',
    message: '',
  });

  const [focusedField, setFocusedField] = useState(null);

  const handleChange = (e) => {
    setFormData((prevData) => ({
      ...prevData,
      [e.target.name]: e.target.value,
    }));
  };

  const handleFocus = (fieldName) => {
    setFocusedField(fieldName);
  };

  const handleBlur = () => {
    setFocusedField(null);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Effectuer les actions souhaitées avec les données du formulaire
    console.log(formData);
    // Réinitialiser le formulaire
    setFormData({
      firstName: '',
      lastName: '',
      phoneNumber: '',
      email: '',
      message: '',
    });
  };

  return (
    <div className="form-container">
      <h2 className="title-form">Nous contacter</h2>
      <form onSubmit={handleSubmit} className="form">
        <div className="cellule">
          <input
            className='input-text'
            type="text"
            id="firstName"
            name="firstName"
            value={formData.firstName}
            onChange={handleChange}
            onFocus={() => handleFocus('firstName')}
            onBlur={handleBlur}
            required
          />
          <label
            htmlFor="firstName"
            className={focusedField === 'firstName' ? 'label-active' : ''}
          >
            Nom
          </label>
        </div>
        <div className="cellule">
          <input
            className='input-text'
            type="text"
            id="lastName"
            name="lastName"
            value={formData.lastName}
            onChange={handleChange}
            onFocus={() => handleFocus('lastName')}
            onBlur={handleBlur}
            required
          />
          <label
            htmlFor="lastName"
            className={focusedField === 'lastName' ? 'label-active' : ''}
          >
            Prénom
          </label>
        </div>
        <div className="cellule">
          <input
            className='input-text'
            type="tel"
            id="phoneNumber"
            name="phoneNumber"
            value={formData.phoneNumber}
            onChange={handleChange}
            onFocus={() => handleFocus('phoneNumber')}
            onBlur={handleBlur}
            required
          />
          <label
            htmlFor="phoneNumber"
            className={focusedField === 'phoneNumber' ? 'label-active' : ''}
          >
            Numéro de téléphone
          </label>
        </div>
        <div className="cellule">
          <input
            className='input-text'
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            onFocus={() => handleFocus('email')}
            onBlur={handleBlur}
            required
          />
          <label
            htmlFor="email"
            className={focusedField === 'email' ? 'label-active' : ''}
          >
            exemple@test.com
          </label>
        </div>
        <div className="cellule">
          <textarea
            className='input-text'
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            onFocus={() => handleFocus('message')}
            onBlur={handleBlur}
            required
          ></textarea>
          <label
            htmlFor="message"
            className={`message-label ${
              focusedField === 'message' ? 'label-active' : ''
            }`}
          >
            Message
          </label>
        </div>
        <button type="submit" className="btn-contact">
          Envoyer
        </button>
      </form>
    </div>
  );
};

export default ContactForm;
