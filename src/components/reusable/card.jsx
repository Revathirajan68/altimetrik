import { Card, CardBody, CardFooter, CardImg, CardText, CardTitle } from "react-bootstrap";
import { FaArrowRight } from "react-icons/fa6";


// style
import "./style.scss"
const CardComponent = ({ img, title, footer, bodyImg, footerContent, text,handleClick }) => {
    return (
        <Card onClick={handleClick}>
            {img && <CardImg src={img} />}
            <CardBody>
                {bodyImg && <CardImg src={bodyImg} />}
                {title && <CardTitle>
                    {title}
                </CardTitle>}
                {text && <CardText>
                    {text}
                </CardText>}
            </CardBody>
            {footer && <CardFooter>
                {footerContent}
            </CardFooter>}
        </Card>
    )
}
export default CardComponent;