
import { useState } from "react"
import { formJSON } from "../../assets/json/formJson"
import Input from "../reusable/input"
import { Form } from "react-bootstrap"
import Select from "../reusable/select"
import Button from "../reusable/button"
const CarForm = ({  onSubmit, optionModels }) => {

    const [formData, setFormData] = useState({})

    const handleChange = (value,id) => {
        console.log(value, id)
        setFormData({ ...formData, [id]: value })
    }
    console.log(formData)

    const handleSubmit = (e) => {
        e.preventDefault()
        console.log(formData)
        onSubmit(formData)
    }

    return (

        <Form onSubmit={handleSubmit}>
            {formJSON?.map((item, index) => {
                return (
                    <div>
                        {item.type === "select" && (
                            <Select
                                label={item.name}
                                options={item.key === "model" ? optionModels : item.options}
                                handleSelect={(value) => handleChange(value, item.key, "select")}
                            />
                        )}
                         {item.type === "input" && (
                           <Input 
                           type={item.inputType}
                           label={item.name}
                           placeholder={item.placeholder}
                           value={formData[item.key]}
                           handleChange={(value)=>handleChange(value,item.key)}
                           />
                        )}
                    </div>
                )
            })}
          
            <Button variant="primary" type="submit">
                Submit
            </Button>
        </Form>
    )
}

export default CarForm;