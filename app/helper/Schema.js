import * as yup from "yup";

const searchSchema = yup.object({
    search: yup.string().test('len', 'Search for anything use use product name or number', val => {if(val) return val.toString().length === 20}),
});

const loginSchema = yup.object({
    phone: yup.number().required("Phone Number is required").test('len', 'Phone Number should be exactly 13 digits', val => {if(val) return val.toString().length === 13}),
    password: yup.number().required("Pin is required")

});

const changePinSchema = yup.object({
    current_password: yup.number().required("Current Pin is required"),
    new_password: yup.number().required("Pin is required").test('len', 'Pin should be exactly 4 digits', val => {if(val) return val.toString().length === 4}),
    retype_password: yup.number().required("Pin is required").oneOf([yup.ref('new_password'), null], 'Pins must match'),
});

const registerSchema = yup.object({
    phone: yup.number().required("Phone Number is required").test('len', 'Phone Number should be exactly 13 digits', val => {if(val) return val.toString().length === 13}),
    firstname: yup.string().required("First Name is required"),
    surname: yup.string().required("Surname is required"),
    email: yup.string().required("Email Address is required"),

});

const profileSchema = yup.object({
    firstname: yup.string().required("First Name is required"),
    surname: yup.string().required("Surname is required")
});

const addStoreSchema = yup.object({
    name:yup.string().required("Store name is required"),
    address: yup.string().required("Store Address is required").trim().min(10, "Store Address must be at least 10 characters"),
});


export {searchSchema, loginSchema, changePinSchema, registerSchema, profileSchema, addStoreSchema}