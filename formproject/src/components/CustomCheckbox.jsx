import React from "react";
import { useField } from "formik";

function CustomCheckbox({ label, ...props }) {
  const [field, meta] = useField(props);
  console.log(field, meta);

  return (
    <>
      <div className="checkBox">
        <input
          {...field}
          {...props}
          className={meta.error ? "inputError" : ""}
        />
        <span>I accept the terms of use</span>
      </div>
      {meta.error && <p className="error">{meta.error}</p>}
    </>
  );
}

export default CustomCheckbox;
