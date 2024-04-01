// import { Product } from "../components/Product";




// export const Main = () =>{


  


    
//     return (
//         <div class="main">
//         <h1>main</h1>
//         <Product value="/1" index={0}>1</Product>
//         <Product value="/2" index={1}>2</Product>
//         <Product value="/3" index={2}>3</Product>

//         </div>

//     )
// }

// import { Product } from "../components/Product";
// import "./Main.css"
// import img01 from "../img/img03.jpg";






// export const Main = () => {






//     return (

//         <div class="main">
//             <div className="main_b">
//                 <div className="mainbg">
//                     <img src={img01}></img>
//                     <img src={img01}></img>
//                 </div>
//                 <div className="main_a">
 
//                     <Product value="/1" index={0} className="mainpage1">1</Product>
//                     <Product value="/2" index={1} className="mainpage2">2</Product>
//                     <Product value="/3" index={2} className="mainpage3">3</Product>

      
//                     {/* <Product value="/1" index={0} className="mainpage1">1</Product>
//                     <Product value="/1" index={0} className="mainpage1">1</Product>
//                     <Product value="/1" index={0} className="mainpage1">1</Product> */}
                    
                    
  
//                     <Product value="/1" index={0} className="mainpage1">1</Product>
//                     <Product value="/2" index={1} className="mainpage2">2</Product>
//                     <Product value="/3" index={2} className="mainpage3">3</Product>

   
//                 </div>
//             </div>
//         </div>
//     )
// }

import { Product } from "../components/Product";
import "./Main.css"
import img01 from "../img/img02.jpg";



export const Main = () => {

    return (

        <div class="main">
            <div className="mainbg">
                <img src={img01}></img>
                <img src={img01}></img>
            </div>
            <div className="introduce">
                <h1>사이트에 대해서 소개드립니다</h1>
                <p><h3>사이트 설명 블라블라 </h3></p>
            </div>
            <div className="mainpage">
                <Product value="/1" index={0} className="mainpage1">1</Product>
                <Product value="/2" index={1} className="mainpage2">2</Product>
                <Product value="/3" index={2} className="mainpage3">3</Product>
                <Product value="/3" index={2} className="mainpage3">3</Product>
            </div>
            <div className="mainpage">
                <Product value="/1" index={0} className="mainpage1">1</Product>
                <Product value="/2" index={1} className="mainpage2">2</Product>
                <Product value="/3" index={2} className="mainpage3">3</Product>
                <Product value="/3" index={2} className="mainpage3">3</Product>
            </div>
        </div>
    )
}