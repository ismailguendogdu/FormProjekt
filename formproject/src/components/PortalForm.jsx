import React from "react";
import { Formik, Form } from "formik";
import CustomInput from "./CustomInput";
import { advancedSchema } from "../schemas";
import CustomSelect from "./CustomSelect";
import CustomCheckbox from "./CustomCheckbox";
import { Link } from "react-router-dom";

const onSubmit = async (values, actions) => {
  await new Promise((r) => {
    setTimeout(r, 1000);
  });
  actions.resetForm();
};

function PortalForm() {
  return (
    <>
      <Formik
        initialValues={{ userName: "", university: "", isAccepted: false }}
        onSubmit={onSubmit}
        validationSchema={advancedSchema}
      >
        {({ isSubmitting }) => (
          <Form>
            <CustomInput
              label="Username"
              name="userName"
              type="text"
              placeholder="Enter your User Name"
            />
            <CustomSelect
              label="University"
              name="university"
              placeholder="Select your University"
            >
              <option value="">Select your University</option>
              <option value="Heinrich Heine">Heinrich Heine</option>
              <option value="RWTH Aachen">RWTH Aachen</option>
              <option value="Technical University of Munich">
                Technical University of Munich
              </option>
              <option value="University of Hamburg">
                University of Hamburg
              </option>
              <option value="University of Stuttgart">
                University of Stuttgart
              </option>
            </CustomSelect>
            <CustomCheckbox
              type="checkbox"
              name="isAccepted"
              label="Accept Terms and Conditions"
            />
            <button disabled={isSubmitting} type="submit">
              Save
            </button>
            <Link className="formLink" to="/">
              go to Homepage
            </Link>
          </Form>
        )}
      </Formik>
    </>
  );
}

export default PortalForm;
