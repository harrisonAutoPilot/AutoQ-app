import * as yup from "yup";

const searchSchema = yup.object({
    search: yup.string().test('len', 'Search for anything use use product name or number', val => {if(val) return val.toString().length === 20}),
});

const loginSchema = yup.object({
    phone: yup.number().required("Phone Number is required").test('len', 'Phone Number should be exactly 13 digits', val => {if(val) return val.toString().length === 13}),
    password: yup.number().required("Pin is required")

});

const forgotSchema = yup.object({
    phone: yup.number().required("Phone Number is required").test('len', 'Phone Number should be exactly 13 digits and exactly your registered account', val => {if(val) return val.toString().length === 13}),
    

});

const changePinSchema = yup.object({
    current_password: yup.number().required("Current Pin is required").test('len', 'Pin should be exactly 4 digits', val => {if(val) return val.toString().length === 4}),
    new_password: yup.number().required("Pin is required").test('len', 'Pin should be exactly 4 digits', val => {if(val) return val.toString().length === 4}),
    retype_password: yup.number().required("Pin is required").oneOf([yup.ref('new_password'), null], 'Pins must match'),
});

const registerSchema = yup.object({
    phone: yup.number().required("Phone Number is required").test('len', 'Phone Number should be exactly 13 digits', val => {if(val) return val.toString().length === 13}),
    firstname: yup.string().trim().required("First Name is required"),
    surname: yup.string().trim().required("Surname is required"),
    email: yup.string().trim().required("Email is required").email(),

});

const profileSchema = yup.object({
    firstname: yup.string().trim().required("First Name is required"),
    surname: yup.string().trim().required("Surname is required")
});

const addStoreSchema = yup.object({
    name:yup.string().trim().required("Store name is required"),
    address: yup.string().trim().required("Store Address is required").trim().min(10, "Store Address must be at least 10 characters"),
    state_id: yup.string().required("State is required"),
    lga_id: yup.string().required("LGA is required"),
    // images: yup.array().required("License Image is required").min(1, "License Image is required"),
    // images2: yup.array().min(1, "Store Image is required").required("Store Image is required")
});

const addStoreSchema2 = yup.object({
    store_name:yup.string().trim().required("Store name is required"),
    address: yup.string().trim().required("Store Address is required").trim().min(10, "Store Address must be at least 10 characters"),
    state_id: yup.string().required("State is required"),
    lga_id: yup.string().required("LGA is required")
});

const addStoreSchemaImg = yup.object({
    images: yup.array(),
    images2: yup.array()
});

const productSchema = yup.object({
    description: yup.string().required("Field is required").trim().min(8, "Minimum of eight (8) characters"),
});


export {searchSchema, loginSchema,forgotSchema, changePinSchema, registerSchema, profileSchema, addStoreSchema, addStoreSchema2, addStoreSchemaImg, productSchema}