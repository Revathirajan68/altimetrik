import { FormGroup, Form } from "react-bootstrap"

const Select = ({label, options, handleSelect}) =>{
    return(
        <FormGroup>
            {label && <Form.Label>{label}</Form.Label>}
            <Form.Select onChange={(e) => handleSelect(e.target.value)}>
                <option>Select</option>
                {options?.map((obj,index)=>{
                    const {id, value} = obj
                    return(
                        <option id={id} key={index} value={id}>{value}</option>
                    )
                })}
            </Form.Select>
        </FormGroup>
    )
}
export default Select;