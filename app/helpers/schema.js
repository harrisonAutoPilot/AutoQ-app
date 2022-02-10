import * as yup from "yup";

const searchSchema = yup.object({
    search: yup.string().test('len', 'Search for anything use use product name or number', val => {if(val) return val.toString().length === 20}),
});

const loginSchema = yup.object({
    phone: yup.number().required("Phone Number is required").test('len', 'Phone Number should be exactly 13 digits', val => {if(val) return val.toString().length === 13}),
    password: yup.number().required("Pin is required")

});

const registerSchema = yup.object({
    phone: yup.number().required("Phone Number is required").test('len', 'Phone Number should be exactly 13 digits', val => {if(val) return val.toString().length === 13}),
    firstname: yup.string().required("First Name is required"),
    surname: yup.string().required("Surname is required"),
    c_password: yup.number().required("Pin is required").oneOf([yup.ref('password'), null], 'Pins must match'),
    password: yup.number().required("Pin is required").test('len', 'Pin should be exactly 4 digits', val => {if(val) return val.toString().length === 4})

});

const profileSchema = yup.object({
    firstname: yup.string().required("First Name is required"),
    surname: yup.string().required("Surname is required")
});

const changePinSchema = yup.object({
    current_password: yup.number().required("Current Pin is required"),
    new_password: yup.number().required("Pin is required").test('len', 'Pin should be exactly 4 digits', val => {if(val) return val.toString().length === 4}),
    retype_password: yup.number().required("Pin is required").oneOf([yup.ref('new_password'), null], 'Pins must match'),
});

const addStoreSchema = yup.object({
    storename:yup.string().required("Store name is required"),
    storestreet: yup.string().required("Store Address is required")

});

const loanSchema = yup.object({
    amount: yup.number().required("Amount Number is required").test('len', 'Amount should be in thousands or millions', val => {if(val) return val.toString().length > 3}),
});


export {searchSchema, loginSchema, registerSchema, addStoreSchema, profileSchema, changePinSchema, loanSchema}