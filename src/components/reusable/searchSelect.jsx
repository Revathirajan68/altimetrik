import { useState } from "react";
import { FormGroup, Form } from "react-bootstrap";


const SearchSelect = ({options, onSelect, label}) => {

    const [searchTerm, setSearchTerm] = useState('');
    const [filteredOptions, setFilteredOptions] = useState(options);

    const handleSearch = (e) => {
        const searchTerm = e.target.value.toLowerCase();
        setSearchTerm(searchTerm);
        const filteredOptions = options.filter(option =>
            option.value.toLowerCase().includes(searchTerm)
        );
        setFilteredOptions(filteredOptions);
    };

    const handleSelect = (option) => {
        onSelect(option);
        setSearchTerm('');
        setFilteredOptions(options);
      };
    return (
        <FormGroup>
            {label && <Form.Label>{label}</Form.Label>}
            <Form.Control
                type="text"
                className="form-control"
                placeholder="Search..."
                value={searchTerm}
                onChange={handleSearch}
            />
            <ul className="dropdown-menu" style={{ display: searchTerm ? 'block' : 'none' }}>
                {filteredOptions.map(option => (
                    <li key={option.id}>
                        <button
                            className="dropdown-item"
                            type="button"
                            onClick={() => handleSelect(option)}
                        >
                            {option.value}
                        </button>
                    </li>
                ))}
            </ul>
        </FormGroup>
    )
}
export default SearchSelect;