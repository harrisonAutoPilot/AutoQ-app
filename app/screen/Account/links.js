const loc= require("../../asset/image/map-pin-fill.png");
const note = require("../../asset/image/agentPhone.png");
const whatsapp = require("../../asset/image/agentWhatsapp.png");
const email = require("../../asset/image/agentEmail.png");
const doc = require("../../asset/image/agentPhone.png");


const links = [{
    id: "1",
    title: "Location",
    icon: loc,
    route: "Delivery",
    item:"Lagos/Ikeja"
},
{
    id: "2",
    title: "Phone" ,
    icon: note,
    route: "Notification",
    item:"phone",
 },
{
    id: "3",
    title: "Whatsapp",
    icon: whatsapp,
    item: "phone"
},
{
    id: "4",
    title: "Email",
    icon: email,
    item: "email"
},

];

export default links;