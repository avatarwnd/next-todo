import * as yup from "yup";

export const getLoginSchema = () =>
  yup
    .object({
      email: yup
        .string()
        .required("This field is required")
        .max(50, "Must be less than 50 characters")
        .email("Must be a valid email"),
      password: yup
        .string()
        .required("This field is required")
        .min(4, "Must be at least 4 characters"),
    })
    .required();
