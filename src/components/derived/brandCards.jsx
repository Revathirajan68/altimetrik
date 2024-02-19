import CardComponent from "../reusable/card"


const BrandCards = ({data, getModelOptions}) =>{
    const {brand, image, optionModels} = data

    console.log(data)
return(
    <CardComponent text={brand} bodyImg={image} handleClick={()=>{getModelOptions(brand, optionModels)}}/>
)
}
export default BrandCards;