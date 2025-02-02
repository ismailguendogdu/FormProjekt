import React from "react";
import { useFormik } from "formik";

function GeneralForm() {
  const { values, errors, handleChange, handleSubmit } = useFormik({
    initialValues: {
      email: "",
      age: "",
      password: "",
      confirmPassword: "",
    },
  });

  // console.log(formik);

  return (
    <form>
      <div>
        <label>Email</label>
        <input
          type="email"
          value={values.email}
          onChange={handleChange}
          id="email"
          placeholder="Enter your email address"
        />
      </div>
      <div>
        <label>Age</label>
        <input
          type="number"
          value={values.age}
          onChange={handleChange}
          id="age"
          placeholder="Enter your age"
        />
      </div>
      <div>
        <label>Password</label>
        <input
          type="password"
          value={values.password}
          onChange={handleChange}
          id="password"
          placeholder="Enter your password"
        />
      </div>
      <div>
        <label>Password again</label>
        <input
          type="password"
          value={values.confirmPassword}
          onChange={handleChange}
          id="confirmPassword"
          placeholder="Enter your password again"
        />
      </div>

      <button type="submit">Save</button>
    </form>
  );
}

export default GeneralForm;
