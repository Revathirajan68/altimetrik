import { IoSearch, IoNotificationsOutline } from "react-icons/io5";
import { RxAvatar } from "react-icons/rx";


// style
import './style.scss';

const Header = () =>{
    return(
        <div className='header-container'>
            <div className="header-right">
                <IoSearch/>
                <IoNotificationsOutline/>
                <RxAvatar/>
            </div>
        </div>
    )
}
export default Header;
