import { useContext, useEffect, useState } from "react";
import { filterJSON } from "../../assets/json/filterJson";
import SearchSelect from "../reusable/searchSelect";
import Select from "../reusable/select";
import FormCheck from "../reusable/check";

import './style.scss';
import Button from "../reusable/button";
import { DataContext } from "../../pages/exploreCars";

const Filter = ({ data }) => {

  const { setFilterData } = useContext(DataContext)

  const [filterArray, setFilterArray] = useState([]);
  const [selectedFilters, setSelectedFilters] = useState([]);


  const setFilter = () => {
    const uniqueBrands = new Map();
    const uniqueLocations = new Map();
    const uniqueBodyTypes = new Map();
    const uniqueModel = new Map();

    data.forEach(car => {
        uniqueBrands.set(car.brand, { id: car.brand, value: car.brand });
        car.data.forEach(details => {
            uniqueLocations.set(details.location.toUpperCase(), { id: details.location.toUpperCase(), value: details.location.toUpperCase() });
            uniqueBodyTypes.set(details.bodyType.toUpperCase(), { id: details.bodyType.toUpperCase(), value: details.bodyType.toUpperCase() });
            uniqueModel.set(details.model, { id: details.model, value: details.model });
        });
    });

    const updateFilterJSON = (filterId, newData) => {
        const filterItem = filterJSON.find(item => item.id === filterId);
        if (filterItem) {
            filterItem.data = [...newData.values()];
        }
    };

    updateFilterJSON("brand", uniqueBrands);
    updateFilterJSON("location", uniqueLocations);
    updateFilterJSON("bodyType", uniqueBodyTypes);
    updateFilterJSON("model", uniqueModel);

    setFilterArray(filterJSON);
  }

  const handleFilter = (value, id, type) => {

    const filterIndex = selectedFilters.findIndex(filter => filter.id === id);

    if (filterIndex !== -1) {
      const updatedFilters = [...selectedFilters];
      updatedFilters[filterIndex] = { id, value };
      setSelectedFilters(updatedFilters);
    } else {
      setSelectedFilters([...selectedFilters, { id, value }]);
    }
  }

  console.log(selectedFilters, "selectedFilters")

  const handleApply = () => {
    setFilterData(selectedFilters)
  }

  useEffect(() => {
    setFilter()
  }, [])

  return (
    <div className="filter-container">
      <div className="filter-header">
        <h1>Filter</h1>
        <Button className={"btn-primary"} onClick={handleApply}>Apply</Button>
      </div>

      {filterArray?.length > 0 && filterArray?.map((filterItem, index) => {
        return (
          <div key={`${index}${filterItem.type}`}>
            {filterItem.type === "searchSelect" && (
              <SearchSelect
                options={filterItem.data}
                label={filterItem.name}
                onSelect={(option) => handleFilter(option, filterItem.id, "searchSelect")}
              />
            )}
            {filterItem.type === "select" && (
              <Select
                label={filterItem.name}
                options={filterItem.data}
                handleSelect={(value) => handleFilter(value, filterItem.id, "select")}
              />
            )}
            {filterItem.type === "radio" && (
              <FormCheck
                type="radio"
                label={filterItem.name}
                options={filterItem.data}
                handleSelect={(value) => handleFilter(value, filterItem.id, "radio")}
              />
            )}
            {filterItem.type === "checkbox" && (
              <FormCheck
                type="checkbox"
                label={filterItem.name}
                options={filterItem.data}
                handleSelect={(value) => handleFilter(value, filterItem.id, "checkbox")}
              />
            )}
          </div>
        )
      })}
    </div>
  )
}
export default Filter;