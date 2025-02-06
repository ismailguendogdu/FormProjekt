import React from "react";
import { Formik, Form } from "formik";
import CustomInput from "./CustomInput";
import { advancedSchema } from "../schemas";

const onSubmit = async (values, actions) => {
  console.log(values, actions);
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
        {() => (
          <Form>
            <CustomInput
              label="Username"
              name="userName"
              type="text"
              placeholder="Enter your User Name"
            />
          </Form>
        )}
      </Formik>
    </>
  );
}

export default PortalForm;
