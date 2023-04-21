import * as yup from "yup";

export const loginSchema = yup.object().shape({
  user_session: yup
    .string()
    .email("Email tidak valid")
    .required("Email harus diisi"),
  password: yup.string().required("Password harus diisi"),
});
export const settingSchema = yup.object().shape({
  full_name: yup.string().required("Nama harus diisi"),
  email: yup.string().email("Email tidak valid").required("Email harus diisi"),
  password: yup.string().required("Password harus diisi"),
});
