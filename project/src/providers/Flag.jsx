// import { createContext,useState } from "react";
// import img01 from "../img/img01.jpg";
// import img02 from "../img/img02.jpg"
// export const AdminFlagContext = createContext({});


// export const Flag =(props) => {
//     const {children}=props
//     //데이터 구조
//     //[{id: ,name: ,price: , url:}]


//     //플래그 만들기
//     const [date,setDate] =useState([]);
//     const [id,setID] =useState("");
//     const [arrays,setArrays] =useState([
//         {id:'1',name:'경복궁 생과방 체험[민속체험]' ,price:'15000',url:img02,info:"경복궁의 소주방 전각에 위치한 '생과방'은 궁중의 육처소 가운데 하나이며, '국왕과 왕비'의 후식과 별식을 준비하던 곳입니다. 경복궁 생과방 프로그램은 조선왕조실록의 내용을 토대로 실제 임금이 드셨던 궁중병과와 궁중약차를 오늘날에도 즐길 수 있도록 구성된 체험 프로그램입니다.",period:"2020-02-05 ~ 2020-03-07",number:"010-98438-0023",time:"08:00 ~ 15:00",address:"서울특별시 종로구 사직로 161"},
//         {id:'2',name:'배' ,price:'2500',url:img01,info:"사과이다",period:"2020-02-05 ~ 2020-03-07",number:"010-98438-0023",time:"08:00 ~ 15:00",address:"프랑스"},
//         {id:'3',name:'귤' ,price:'3500',url:img01,info:"사과이다",period:"2020-02-05 ~ 2020-03-07",number:"010-98438-0023",time:"08:00 ~ 15:00",address:"프랑스"}

//     ]);
//     //AdminFlagContext 안에 provider 이 있으으로 감싸면 된다
//     return (
//         <AdminFlagContext.Provider value={{date,setDate,id,setID,arrays,setArrays}}>
//             {children}
//         </AdminFlagContext.Provider>
//     )
// }

import { createContext,useState } from "react";
import img01 from "../img/img01.jpg";
import img02 from "../img/img02.jpg";
import img03 from "../img/img03.jpg"
export const AdminFlagContext = createContext({});


export const Flag =(props) => {
    const {children}=props
    //데이터 구조
    //[{id: ,name: ,price: , url:}]


    //플래그 만들기
    const [date,setDate] =useState([]);
    const [id,setID] =useState("");
    const [arrays,setArrays] =useState([
        {id:'1',name:'경복궁 생과방 체험[민속체험]' ,price:'15000',url:[img01,img02,img03],info:"경복궁의 소주방 전각에 위치한 '생과방'은 궁중의 육처소 가운데 하나이며, '국왕과 왕비'의 후식과 별식을 준비하던 곳입니다. 경복궁 생과방 프로그램은 조선왕조실록의 내용을 토대로 실제 임금이 드셨던 궁중병과와 궁중약차를 오늘날에도 즐길 수 있도록 구성된 체험 프로그램입니다.",period:"2020-02-05 ~ 2020-03-07",number:"010-98438-0023",time:"08:00 ~ 15:00",address:"서울특별시 종로구 사직로 161"},
        {id:'2',name:'배' ,price:'2500',url:[img01,img02,img03],info:"사과이다",period:"2020-02-05 ~ 2020-03-07",number:"010-98438-0023",time:"08:00 ~ 15:00",address:"프랑스"},
        {id:'3',name:'귤' ,price:'3500',url:[img01,img02,img03],info:"사과이다",period:"2020-02-05 ~ 2020-03-07",number:"010-98438-0023",time:"08:00 ~ 15:00",address:"프랑스"}

    ]);
    //AdminFlagContext 안에 provider 이 있으으로 감싸면 된다
    return (
        <AdminFlagContext.Provider value={{date,setDate,id,setID,arrays,setArrays}}>
            {children}
        </AdminFlagContext.Provider>
    )
}