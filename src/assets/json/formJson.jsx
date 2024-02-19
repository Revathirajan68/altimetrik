export const formJSON = [
    {
        name:"Model",
        key:"model",
        type:"select",
        disabled:true,
        options:[],
    },
    {
        name:"Location",
        key:"location",
        type:"input",
        inputType:"text",
        disabled:false,
        placeholder:"Enter here"
    },
    {
        name:"Color",
        key:"color",
        type:"input",
        inputType:"text",
        disabled:false,
        placeholder:"Enter here"
    },
    {
        name:"No of Owners",
        key:"owners",
        type:"select",
        options:[
            {
                id:"1",
                value:"1st Owner"
            },
            {
                id:"2",
                value:"2nd Owner"
            },
            {
                id:"3",
                value:"3rd Owner"
            },
            {
                id:"4",
                value:"More than 3 owners"
            } 
        ],
        disabled:false,
    },
    {
        name:"Year of manufacture",
        key:"yom",
        type:"input",
        inputType:"number",
        disabled:false,
        placeholder:"Enter here"
    },
    {
        name:"Insurance Validity",
        key:"insurance",
        type:"input",
        inputType:"number",
        disabled:false,
        placeholder:"Enter here"
    },
    {
        name:"Kms",
        key:"kms",
        type:"input",
        inputType:"number",
        disabled:false,
        placeholder:"Enter here"
    },
    {
        name:"Budget",
        key:"budget",
        type:"select",
        options:[
            {
                id:"1",
                value:"Less than 2 L"
            },
            {
                id:"2",
                value:"2 L - 4 L"
            },
            {
                id:"3",
                value:"4 L - 6 L"
            },
            {
                id:"4",
                value:"More than 6 L"
            },
        ],
        disabled:false,
    },
    {
        name:"Fuel Type",
        key:"fuelType",
        type: "select",
        options:[
            {
                id:"Petrol",
                value:"Petrol"
            },
            {
                id:"Diesel",
                value:"Diesel"
            },
            {
                id:"CNG",
                value:"CNG"
            }
        ],
        disabled:false,
    },
    {
        name:"Transmission",
        key:"transmission",
        type: "select",
        options:[
            {
                id:"Manual",
                value:"Manual"
            },
            {
                id:"Automatic",
                value:"Automatic"
            }
        ],
        disabled:false,
    }
]