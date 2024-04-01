import { Link } from "react-router-dom";
import "./Header.css";
export const Header = ()=>{


    return(
        
        <div class="container">
        

        <div class="top">
            <h1 class="header_logo">ArtKey</h1>

            <div class="top_right">
                    <Link to="/Main"><button>SHOP</button></Link>
            </div>
            
            <div class="top_left">
                <Link to="/Reservation"><button>Reservation</button></Link>
            </div>

        </div>
        </div>
        

    )
}