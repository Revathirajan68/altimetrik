import { createContext, useState } from "react"
import Filter from "../components/derived/filter"
import CarsList from "../components/derived/carsList"
import { useSelector } from "react-redux"
import { Row, Col } from "react-bootstrap"

export const DataContext = createContext()

const ExploreCars = () => {
    const getCarData = useSelector(state => state.carDetail.carReducerData)


    console.log(getCarData)
    const [filterData, setFilterData] = useState([])
    return (
        <DataContext.Provider value={{ filterData, setFilterData }}>
                <Row  className="explore-container">
                    <Col md={5}>
                        <h1>Explore</h1>
                        <Filter data={getCarData} />
                    </Col>
                    <Col md={7}>
                        <CarsList data={getCarData} />
                    </Col>
                </Row>
        </DataContext.Provider>
    )
}
export default ExploreCars;