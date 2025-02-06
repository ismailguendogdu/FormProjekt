import * as yup from "yup";
const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/;

export const basicSchema = yup.object().shape({
  email: yup
    .string()
    .email("Enter a valid email")
    .required("Email is required"),
  age: yup
    .number()
    .positive("Please enter positiv age")
    .integer("Please enter your age in whole number")
    .required("Age is required"),
  password: yup
    .string()
    .min(5, "Please enter a minimum of 5 characters")
    .matches(passwordRegex, {
      message:
        "Password must contain at least one uppercase letter, one lowercase letter, and one number",
    })
    .required("Password is required"),
  confirmPassword: yup
    .string()
    .oneOf([yup.ref("password")], "Passwords do not matchs")
    .required("Password confirmation is required"),
});

// import * as yup from "yup";
// const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/;

export const advancedSchema = yup.object().shape({
  userName: yup
    .string()
    .min(3, "Please enter a minimum of 5 characters")
    .required("Username is required"),
  university: yup
    .string()
    .oneOf(
      [
        "Heinrich Heine",
        "RWTH Aachen",
        "Technical University of Munich",
        "University of Hamburg",
        "University of Stuttgart",
      ],
      "Please select a valid university"
    )
    .required("University is required"),
  isAccepted: yup
    .boolean()
    .oneOf([true], "Please accept the terms and conditions")
    .required("Please accept the terms and conditions"),
});
