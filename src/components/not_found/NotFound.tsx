import './notfound.scss';
import { Link } from "react-router-dom";

function NotFound()
{


    return(
        <div className="not-found-wrapper">
            <h1 className="not-found-alert">
                Page you are looking for doesn't exist!
            </h1>
            <Link to='/'>Main Page</Link>
        </div>
    );
}


export default NotFound;