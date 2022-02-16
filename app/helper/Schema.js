import * as yup from "yup";

const searchSchema = yup.object({
    search: yup.string().test('len', 'Search for anything use use product name or number', val => {if(val) return val.toString().length === 20}),
});

const loginSchema = yup.object({
    phone: yup.number().required("Phone Number is required").test('len', 'Phone Number should be exactly 13 digits', val => {if(val) return val.toString().length === 13}),
    password: yup.number().required("Pin is required")

});



export {searchSchema, loginSchema}