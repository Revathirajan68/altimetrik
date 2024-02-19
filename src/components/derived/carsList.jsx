import { useContext, useEffect, useState } from "react";
import { DataContext } from "../../pages/exploreCars";
import CardComponent from "../reusable/card";

const CarsList = ({data}) =>{

    const { filterData } = useContext(DataContext)
    const [carData, setCarData] = useState(data)

    const getFilteredCarData = () =>{
            // Copy the original CarsJSON to avoid mutating it
    let filteredCars = [...carData];

    // Apply each filter
    filterData.forEach(filter => {
        switch (filter.id) {
            case "brand":
                filteredCars = filteredCars.filter(car => filter.data.includes(car.brand));
                break;
            case "location":
                filteredCars = filteredCars.filter(car =>
                    car.data.some(details => details.location === filter.value)
                );
                break;
            case "model":
                filteredCars = filteredCars.filter(car =>
                    car.data.some(details => details.model === filter.value)
                );
                break;
            case "bodyType":
                filteredCars = filteredCars.filter(car =>
                    car.data.some(details => details.bodyType.toLowerCase() === filter.value.toLowerCase())
                );
                break;
            case "transmission":
                filteredCars = filteredCars.filter(car =>
                    car.data.some(details => details.transmission.toLowerCase() === filter.value.toLowerCase())
                );
                break;
            // Add cases for other filters like budget, owners, etc. as needed
            default:
                break;
        }
    });

    setCarData(filteredCars);

    }

    useEffect(()=>{
        getFilteredCarData()
    },[filterData])
    return(
        <div className="car-list-container">
            <div className="car-list">
                {carData.map((obj)=>{
                    console.log(obj)
                    const {data, image} = obj
                    {data?.map((list,i)=>{
                        return(
                            <CardComponent text={list.model} bodyImg={image}/>
                        )
                    })}
                  
                })}
                </div>
        </div>
    )
}
export default CarsList;