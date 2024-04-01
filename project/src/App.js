import {  Route, Routes,Navigate   } from "react-router-dom";
import { useContext } from "react";
import { AdminFlagContext } from "./providers/Flag";
import {Reservation} from "./page/Reservation";
import {Main} from "./page/Main";
import {Header} from "./components/Header";
import {Detail} from "./page/Detail";
import {Footer} from "./components/Footer";
export const App=()=>{
  const {arrays,setArrays}=useContext(AdminFlagContext)

  // <Route path="/1" element={<Detail id={1} name={array.naem} price='1500'/>} />
  // <Route path="/2" element={<Detail id={2} name='배' price='2500'/>} />
  // <Route path="/3" element={<Detail id={3} name='귤' price='3500'/>} />

  return (

    <>
    
    <Header></Header>
    <div className="back">
        <Routes>
          <Route path="/" element={<Navigate to="/Main" />} />
            <Route path="/Main" element={<Main />} />
            <Route path="/Reservation" element={<Reservation />} />
            {arrays.map((list)=> (
              <Route path={`/${list.id}`} element={<Detail id={list.id} name={list.name} price={list.price} url={list.url} info={list.info} period={list.period} number={list.number} time={list.time} address={list.address} />} />
            ))}

        </Routes></div>
      <Footer></Footer>


        

    </>

  )
}


