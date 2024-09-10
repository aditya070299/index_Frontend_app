import React, { useState } from "react";

function ResetPasswordForm() {
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [message, setMessage] = useState("");

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleConfirmPasswordChange = (event) => {
    const value = event.target.value;
    setConfirmPassword(value);

    if (value === password) {
      setMessage("Passwords match");
    } else {
      setMessage("Passwords do not match");
    }
  };

  return (
    <div>
      <h3>Reset Password Form</h3>
      <input
        type="text"
        value={password}
        placeholder="Enter your password"
        onChange={handlePasswordChange}
      />
      <input
        type="text"
        value={confirmPassword}
        placeholder="Re-enter your password"
        onChange={handleConfirmPasswordChange}
      />
      <p>{message}</p>
    </div>
  );
}

export default ResetPasswordForm;
