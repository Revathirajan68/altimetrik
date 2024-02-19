export const filterJSON = [
    {
        name: "Location",
        id:"location",
        type:"select",
        data:[]
    },
    {
        name:"Body Type",
        id:"bodyType",
        type:"searchSelect",
        data:[]
    },
    {
        name:"Brand",
        id:"brand",
        type:"checkbox",
        data:[]
    },
    {
        name:"Model",
        id:"model",
        type:"checkbox",
        data:[]
    },
    {
        name:"Owners",
        id:"owners",
        type:"radio",
        data:[
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
        ]
    },
    {
        name:"Budget",
        id:"budget",
        type:"tag",
        data:[
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
        ]
    },
    {
        name:"Fuel Type",
        id:"fuelType",
        type: "radio",
        data:[
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
        ]
    },
    {
        name:"Transmission",
        id:"transmission",
        type: "radio",
        data:[
            {
                id:"Manual",
                value:"Manual"
            },
            {
                id:"Automatic",
                value:"Automatic"
            }
        ]
    }
];

