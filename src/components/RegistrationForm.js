import React from "react";
import "../styles/registrationform.css";

const RegistrationForm = () => {
  return (
    <div className="container">
      <div className="registration form">
        <header>Registration Form</header>
        <form method="post">
          <label htmlFor="firstname">First Name:</label>
          <input
            id="firstname"
            type="text"
            placeholder="First Name"
            name="firstname"
            required
          />

          <label htmlFor="middlename">Middle Name:</label>
          <input
            id="middlename"
            type="text"
            placeholder="Middle Name"
            name="middlename"
          />

          <label htmlFor="lastname">Last Name:</label>
          <input
            id="lastname"
            type="text"
            placeholder="Last Name"
            name="lastname"
            required
          />

          <label htmlFor="email">Email:</label>
          <input id="email" type="email" required name="email" />

          <fieldset>
            <legend>Gender:</legend>
            <input type="radio" id="male" name="gender" value="male" required />
            <label htmlFor="male" className="radioBtn">Male</label>
            <input type="radio" id="female" name="gender" value="female" />
            <label htmlFor="female" className="radioBtn">Female</label>
            <input type="radio" id="other" name="gender" value="other" />
            <label htmlFor="other" className="radioBtn">Other</label>
          </fieldset>

          <div className="formBtn">
            <input className="btn" type="submit" value="Register Now" />
            <input className="btn" type="reset" />
          </div>
        </form>
      </div>
    </div>
  );
};

export default RegistrationForm;