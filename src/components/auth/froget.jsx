import React from 'react';
import './index.css';

const Forget = () => {
  const handleSubmit = (event) => {
    event.preventDefault();
    // Add your logic to handle the form submission and password recovery process here
  };

  return (
    <div className="container" id="container">
      <div className="form-container forget-container">
        <form onSubmit={handleSubmit}>
          <h1>Find your account</h1>
          <p>Please enter your email to search for your account</p>
          <input type="email" placeholder="Email" name="email" />
          <button type="submit" value="submit">Submit</button>
        </form>
      </div>
    </div>
  );
};

export default Forget;
