import React, { useState } from "react";

const UserEmail = () => {
  const [email, setEmail] = useState("");
  const [validEmail, setValidEmail] = useState(false);

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
    const valid = /^\S+@\S+\.\S+$/.test(event.target.value);
    console.log(
      "🚀 ~ file: UserEmail.js:10 ~ handleEmailChange ~ valid:",
      valid
    );
    setValidEmail(valid);
  };

  return (
    <div className="col-sm">
      <div className="row">
        <div className="col">
          Wanna be a part of a whole new world of sports that's managed in your
          finger tips?
        </div>
      </div>
      <div className="row">
        <div className="col">Love for your game can now make you earn!</div>
      </div>
      <div className="row">
        <div className="col">
          <input
            type="email"
            className="form-control"
            placeholder="start typing email address"
            value={email}
            onChange={handleEmailChange}
          />
        </div>
      </div>
    </div>
  );
};

export default UserEmail;
