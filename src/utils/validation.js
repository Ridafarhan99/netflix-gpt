export const checkValidData = (email, pass) => {
  const isEmailValid = /^[^@]+@[^@]+\.[^@]+$/.test(email);
  const isPasswordValid =
    /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/.test(pass);

  if (!isEmailValid) {
    return "Invalid email";
  }
  if (!isPasswordValid) {
    return "Invalid password";
  }

  return null;
};
