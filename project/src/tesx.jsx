import { useEffect, useState } from "react";
import { AdminFlagContext } from "../providers/Flag";
import { useContext } from "react";
import "./Detail.css"

export const Detail =(props)=> {

    const {date,setDate}=useContext(AdminFlagContext)
    const [count,setCount]=useState(0)
    const onclickP=()=>{
        setCount(count+1)

    }
    const onclickM=()=>{
        if (count<=0){
            setCount(0)
        }
        else{
           setCount(count-1) 
        }
        

    }

    const onclick = () => {

        const c = [ ...date ];
    
       
        let exists = false;
        for (const key in c) {
            if (c[key].id === props.id) {
                exists = true;
                c[key] = { id: props.id, name: props.name, price: props.price, count: count,url:props.url };
                setDate(c);
                alert("예약이 완료되었습니다.")
                break;
            }

            
        }
        const cs= [...date];

        if (!exists) {
  
            cs.push( { id: props.id, name: props.name, price: props.price, count: count,url:props.url})
            setDate(cs);
            alert("예약이 완료되었습니다.")
        }
        
    }

    useEffect(()=>{

    },[date,setDate])



    return(
        <>
            <main class="main_Detail">
                <section class="product">
                    <div className="product_box">
                        <div class="left">
                            {/* 전시 이미지 */}
                            {/* <div class="product_img">
                                <img src={props.url} />
                            </div> */}
                            
                            <div class="product_img" style={{ backgroundImage: `url(${props.url})`}}>
                            </div>
                        </div>
                    

                        {/* 전시 정보, 상품 이름, 상품 가격 */}
                        <div class="right">
                            {/* 상품 info */}
                            <div class="product_info">
                                {/* 작품 간단 설명 */}
                                <div class="title_info">
                                    <h2>{props.name}</h2> 
                                    <p>{props.info}</p>
                                </div>
                            

                                <div class="product_explain">
                                    <ul>
                                        <li class="list_expalin">
                                            <p>행사기간 : {props.period}</p>
                                        </li>
                                        <li class="list_expalin">
                                            <p>가격 : {props.price}원</p>
                                        </li>
                                        <li class="list_expalin">
                                            <p>전화번호 : {props.number}</p> 
                                        </li>
                                        <li class="list_expalin">
                                            <p>이용시간 : {props.time}</p> 
                                        </li>
                                        <li class="list_expalin">
                                            <p>주소 : {props.address}</p> 
                                        </li>
                                    </ul>
                                </div>


                                <div class="line"></div>

                                {/* 예약 인원 수 카운트 */}
                                <div class="amount">
                                    <p>인원 수</p>
                                    <button class="amount_btn" onClick={onclickM}>-</button> 
                                    {/* <input type="number">{count}></input> */}
                                    <span>{count}</span>
                                    <button class="amount_btn"onClick={onclickP}>+</button>
                                </div>

                                <div class="line"></div> 


                                {/* 합계 및 총 가격 */}
                                <div class="sum">
                                    <div class="sum_price">
                                        <span>총 상품 금액</span>
                                    </div>

                                    {/* 구매 정보 */}
                                    <div class="total_info">
                                        {/* 총 수량 */}
                                        <span class="total_count">총 인원 {count}명 
                                        </span>
                                        <span class="h_line"></span>
                                        {/* 총 금액 */}
                                        <span class="total_price">
                                            {count * props.price}
                                                <span class="total_unit">원</span>
                                        </span>
                                    </div>
                                </div>

                                {/* 버튼 구현 */}
                                <div class="btn">
                                    <button class="btn_reservation" onClick={onclick}>예약하기</button> 
                                </div>
                            </div>
                        </div>
                    </div>
            </section>
        </main>    
    </>
);
};
