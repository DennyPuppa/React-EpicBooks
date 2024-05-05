import MyNav from "../components/navbar/MyNav";
import MyFooter from "../components/footer/MyFooter";
import { Button } from "react-bootstrap";
import img404 from "../assets/img/image_processing20220226-557-1eww7qp.gif"
import "./css/errorPage.css"
import { useNavigate } from "react-router-dom";

const ErrorPage = () => {

    const navigate = useNavigate();

    const backHomePage = () => {
        navigate('/')
    }
    
    return (
        <div className="error-page">
            <MyNav />
            <div className="d-flex flex-column justify-content-center align-items-center">
                <div className="error-gif">
                    <img className="w-100" src={img404}></img>
                </div>
                <p className="text-center">Oops, qualcosa è andato storto...</p>
                <Button onClick={backHomePage}>Torna alla Home Page</Button>
            </div>
            <MyFooter/>
        </div>
    )
}

export default ErrorPage;