const price = [
    {
        id: " ",
        type: "All Prices"
    },
    {
        id: "high_to_low",
        type: "High to Low"
    },
    {
        id: "low_to_high",
        type: "Low to High"
    },
    {
        id: "deal",
        type: "Deals"
    }
];


const pack = [
    {
        id: " ",
        type: "Any"
    },
    {
        id: "roll",
        type: "Roll"
    },
    {
        id: "box",
        type: "Box"
    },
];

const store = [
    {
        id: "pharmacy/chemist",
        type: "Pharmacy & Chemist",
        option: "pharmacy/chemist",
        idd:"",

    },
    {
        id: "hospital1",
        idd:1,
        type: "Hospital 5%",
        option: "hospital",
        name: "2 months",
        price_increment: "10.00",
    },
    {
        id: "hospital2",
        idd:2,
        type: "Hospital 10%",
        option: "hospital",
        name: "2 months",
        price_increment: "10.00",
    },
    {
        id: "hospital3",
        idd:3,
        type: "Hospital 15%",
        option: "hospital",
        name: "> 2 months",
        price_increment: "15.00",
    },
];


export { pack, price, store }
