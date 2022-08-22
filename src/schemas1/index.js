import * as Yup from "yup";

export const signUpSchema= Yup.object({
    name:Yup.string().min(5).required("Please enter your name"),
    id:Yup.number().min(8,'must be 8 characters').required("Please enter your ID"),
    password:Yup.string().min(6).required("Please enter correct password"),
    address:Yup.string().required("Please enter the address"),
    phonenumber:Yup.number().min(8).required("Please enter phone number")
});