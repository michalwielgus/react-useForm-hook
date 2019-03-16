const validate = values => {
  let errors = {};
  if (!values.email) {
    errors.email = "Email address is required";
  } else if (!/\S+@\S+\.\S+/.test(values.email)) {
    errors.email = "Email address is invalid";
  }

  if (!values.password) {
    errors.password = "Password is required";
  } else if (
    !/^(?=.*\d)(?=.*[A-Z])(?!.*[^a-zA-Z0-9@#$^+=])(.{8,15})$/.test(
      values.password
    )
  ) {
    errors.password =
      "Password must be 8-15 letters and must contain at least one capital letter and at least one digit";
  }

  return errors;
};

export default validate;
