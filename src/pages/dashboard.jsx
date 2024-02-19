import { useEffect, useState } from 'react';
import './style.scss'
import { updateCarData } from '../reducer/reducer';
import { CarsJSON } from '../assets/json/carsJson';
import BrandCards from '../components/derived/brandCards';
import { useDispatch } from 'react-redux';
import CarForm from '../components/derived/carForm';
import FormModal from '../components/reusable/modal';
import Button from '../components/reusable/button';
import { useNavigate } from 'react-router-dom';

const Dashboard = () =>{
    const dispatch = useDispatch();
    const navigate = useNavigate()
    const carsData = CarsJSON

    const [showForm, setShowForm] = useState(false);
    const [brand,setBrand] = useState("")
    const [optionModels,setOptionModels] = useState([])

    const getForm = (id, option) =>{
        console.log(id, option)
        setShowForm(true)
        setOptionModels(option)
        setBrand(id)
    }
    const handleSubmit = (formData) =>{
        console.log(formData)
        let updatedCarData = [...carsData]
        updatedCarData = updatedCarData.map((obj)=>{
            if(obj.brand === brand){
                return {
                    ...obj,
                    data: [...obj.data, formData]
                };
            }
            else{
                return obj
            }
        })
        console.log(updatedCarData)
        dispatch(updateCarData(updatedCarData))
        setShowForm(false)
    }
    useEffect(()=>{
        dispatch(updateCarData(carsData));
    },[])
    return(
        <div className="dashboard-container">
            <h1>Dashboard</h1>

            <div className='dashboard-card-container'>
                {carsData?.map((obj,index)=>{
                    const {brand, image, optionModels} = obj
                    return(
                        <BrandCards key={index} data={{brand,image, optionModels}} getModelOptions={getForm}/>
                    )
                })}
                <Button className={"btn-primary"} onClick={()=>navigate('/explore-cars')}>More</Button>
            </div>

           <FormModal
           children={<CarForm optionModels={optionModels} brand={brand} onSubmit={handleSubmit}/>}
           show={showForm}
           onClose={() => setShowForm(false)}
           
           />
        </div>
    )
}
export default Dashboard;