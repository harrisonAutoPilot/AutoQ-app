import * as yup from "yup";


const loginSchema = yup.object({
    phone: yup.number().required("Required").test('len', 'Invalid Phone Number', val => {if(val) return val.toString().length === 10}),
    code: yup.number().required("Required")

});
const changePinSchema = yup.object({
  current_password: yup.number().required("Current Pin is required"),
  new_password: yup.number().required("Pin is required").test('len', 'Pin should be exactly 4 digits', val => {if(val) return val.toString().length === 4}),
  retype_password: yup.number().required("Pin is required").oneOf([yup.ref('new_password'), null], 'Pins must match'),
});


const pinSchema = yup.object({
    p0: yup.number().required("Required").integer(),
    p1: yup.number().required("Required").integer(),
    p2: yup.number().required("Required").integer(),
    p3: yup.number().required("Required").integer()

});

const nameSignupSchema = yup.object({
  firstname: yup.string().trim().required("Required"),
  lastname: yup.string().trim().required("Required")

});

const emailSignupSchema = yup.object({
  email: yup.string().trim().required("Required").email()

});

const reviewSchema = yup.object({
  myReview: yup.string().trim().required("Review is required"),

});

const requestSchema = yup.object({
  description: yup.string().trim().required("Request is required"),

});


const storeSignupSchema = yup.object({
  store_address: yup.string().trim().required("Address is required"),
  store_name: yup.string().min(3).trim().required("Name of Pharmacy/Business is required"),
  state_id: yup.string().required("State is required"),
  lga_id: yup.string().required("LGA is required")
});




const addTeamSchema = yup.object({
  first_name: yup.string().trim().required("Required"),
  last_name: yup.string().trim().required("Required"),
  phone: yup.number().required("Required").test('len', 'Invalid Phone Number', val => {if(val) return val.toString().length === 10}),
  email: yup.string().trim().required("Required").email()
});





export { loginSchema,changePinSchema, pinSchema,requestSchema, nameSignupSchema, emailSignupSchema, storeSignupSchema, reviewSchema, addTeamSchema }
