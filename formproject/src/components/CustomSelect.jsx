import React from "react";
import { useField } from "formik";

function CustomSelect({ label, ...props }) {
  const [field, meta] = useField(props);
  console.log(field, meta);

  return (
    <>
      <label>{label}</label>
      <select
        {...field}
        {...props}
        className={meta.error ? "inputError" : ""}
      />
      {meta.error && <p className="error">{meta.error}</p>}
    </>
  );
}

export default CustomSelect;
