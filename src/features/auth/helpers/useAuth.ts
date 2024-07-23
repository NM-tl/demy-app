import { useState } from 'react';
import { nameRegex, emailRegex, passwordRegex } from './regex';

export default function useAuth() {
  const [errors, setErrors] = useState({
    name: '',
    email: '',
    password: ''
  });

  const validateName = (name: string) => {
    return nameRegex.test(name) ? '' : 'Full name should have at least two words and each word should have at least two letters.';
  };

  const validateEmail = (email: string) => {
    return emailRegex.test(email) ? '' : 'Invalid email address.';
  };

  const validatePassword = (password: string) => {
    return passwordRegex.test(password) ? '' : 'Password must be 8-15 characters long, and contain at least one letter, one number, and one special symbol.';
  };

  const validate = (name: string, email: string, password: string) => {
    const nameError = validateName(name);
    const emailError = validateEmail(email);
    const passwordError = validatePassword(password);

    setErrors({
      name: nameError,
      email: emailError,
      password: passwordError
    });

    return !nameError && !emailError && !passwordError;
  };

  return {
    errors,
    validate
  };
}
