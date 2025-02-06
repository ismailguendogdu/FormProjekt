import React from "react";
import { useFormik } from "formik";
import { basicSchema } from "../schemas";

const onSubmit = async (values, actions) => {
  console.log(values, actions);
  await new Promise((r) => {
    setTimeout(r, 1000);
  });
  actions.resetForm();
};

function GeneralForm() {
  const { values, errors, isSubmitting, handleChange, handleSubmit } =
    useFormik({
      initialValues: {
        email: "",
        age: "",
        password: "",
        confirmPassword: "",
      },
      validationSchema: basicSchema,
      onSubmit,
    });

  return (
    <form onSubmit={handleSubmit}>
      <div className="inputGroup">
        <label>Email</label>
        <input
          type="email"
          value={values.email}
          onChange={handleChange}
          id="email"
          placeholder="Enter your email address"
          className={errors.email ? "inputError" : ""}
        />
        {errors.email && <p className="error">{errors.email}</p>}
      </div>
      <div className="inputGroup">
        <label>Age</label>
        <input
          type="number"
          value={values.age}
          onChange={handleChange}
          id="age"
          placeholder="Enter your age"
          className={errors.age ? "inputError" : ""}
        />
        {errors.age && <p className="error">{errors.age}</p>}
      </div>
      <div className="inputGroup">
        <label>Password</label>
        <input
          type="password"
          value={values.password}
          onChange={handleChange}
          id="password"
          placeholder="Enter your password"
          className={errors.password ? "inputError" : ""}
        />
        {errors.password && <p className="error">{errors.password}</p>}
      </div>
      <div className="inputGroup">
        <label>Password again</label>
        <input
          type="password"
          value={values.confirmPassword}
          onChange={handleChange}
          id="confirmPassword"
          placeholder="Enter your password again"
          className={errors.confirmPassword ? "inputError" : ""}
        />
        {errors.confirmPassword && (
          <p className="error">{errors.confirmPassword}</p>
        )}
      </div>

      <button disabled={isSubmitting} type="submit">
        Save
      </button>
    </form>
  );
}

export default GeneralForm;
