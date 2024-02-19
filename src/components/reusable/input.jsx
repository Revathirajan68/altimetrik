import { Form, FormGroup } from "react-bootstrap"


const Input = ({type, placeholder, value, label, handleChange}) =>{
    return(
        <FormGroup>
            {label && <Form.Label>{label}</Form.Label>}
            <Form.Control
            type={type}
            placeholder={placeholder}
            value={value}
            onChange={e => handleChange(e.target.value)}
            />
        </FormGroup>
    )
}
export default Input;