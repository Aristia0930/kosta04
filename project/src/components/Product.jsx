// import { AdminFlagContext } from "../providers/Flag";
// import { Link } from "react-router-dom";
// import { useContext } from "react";

// export const Product =({value,index}) => {
//    const {arrays}=useContext(AdminFlagContext)


//    return(
//     <div class="main">

//          <Link to={value}>
//             <div>
//                {/* <img src={arrays[index].url}></img> */}
//                <img src={arrays[index].url}></img>
//                <p>{arrays[index].name}</p>
//                <p>{arrays[index].period}</p> 
//             </div>
//             </Link>
//     </div>
//    )


// }
import { AdminFlagContext } from "../providers/Flag";
import { Link } from "react-router-dom";
import { useContext } from "react";
import "./Product.css";
export const Product = ({ value, index }) => {
   const { arrays } = useContext(AdminFlagContext)

//    return (
      
//          <Link to={value} style={{ textDecoration: 'none', width:'1140' }} className="ab">
//          <div className="main_produce">
//             <div className="list">
//                <img src={arrays[index].url[0]}></img>
//                <div className="listtext">
//                   <p>{arrays[index].name}</p>
//                   <p>{arrays[index].period}</p>
//                </div>
//             </div>     </div>
//          </Link>
 
//    );
// };

return (
   <div className="main_produce">
      <Link to={value} style={{ textDecoration: 'none' }}>
         <div className="list">
            <img src={arrays[index].url[0]}></img>
            <div className="listtext">
               <p>{arrays[index].name}</p>
               <p>{arrays[index].period}</p>
            </div>
         </div>
      </Link>
   </div>

);
};
