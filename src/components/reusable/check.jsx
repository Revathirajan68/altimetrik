import { useState } from "react";
import { FormGroup, Form } from "react-bootstrap"

const FormCheck = ({ label, type, options, handleSelect }) => {

    const [selectedOptions, setSelectedOptions] = useState([]);

    const handleChange = (e, id) => {
        
        const { value, checked } = e.target;
        let selectedValues =[...selectedOptions]
        if(type === "radio"){
            selectedValues = [value]
        }
       else{
       
        if (checked) {
            selectedValues.push(value);
        } else {
            selectedValues = selectedValues.filter(option => option !== value);
        }
       }
       setSelectedOptions(selectedValues)
       handleSelect(selectedValues)
      };
    return (
        <FormGroup>
            {label && <Form.Label>{label}</Form.Label>}
            {options.map(option => 
            <Form.Check 
            type={type} 
            label={option.value} 
            key={option.id} 
            value={option.id} 
            checked={ type === "radio" ? selectedOptions[0] === option.id : selectedOptions.includes(option.value)} 
            onChange={(e) => handleChange(e, option.id)}/>)}
        </FormGroup>
    )
}

export default FormCheck;