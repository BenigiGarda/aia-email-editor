import * as yup from "yup";

export const loginSchema = yup.object().shape({
  user_session: yup
    .string()
    .email("Email tidak valid")
    .required("Email harus diisi"),
  password: yup.string().required("Password harus diisi"),
});
export const settingSchema = yup.object().shape({
  name: yup.string().required("Nama harus diisi"),
  phone: yup
    .string()
    .matches(/^\d+$/, "Harap mengisi angka")
    .required("Nomor harus diisi"),
  password: yup.string().required("Password harus diisi"),
});
