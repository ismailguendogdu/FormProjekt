import React from "react";
import { useField } from "formik";

function CustomInput({ label, ...props }) {
  const [field, meta] = useField(props);
  console.log(field, meta);

  return (
    <>
      <label>{label}</label>
      <input {...field} {...props} className={meta.error ? "inputError" : ""} />
      {meta.error && <p className="error">{meta.error}</p>}
    </>
  );
}

export default CustomInput;
