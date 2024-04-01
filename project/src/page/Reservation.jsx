// import { useCallback, useState } from "react";
// import { AdminFlagContext } from "../providers/Flag";
// import { useContext } from "react";
// import "./Reservation.css";
// //import {Item} from "../components/Item";

// export const Reservation = () => {
//     const {date,setDate}=useContext(AdminFlagContext)
//     const [selectedItems, setSelectedItems]=useState([]);
//     const [selectedI, setSelectedI]=useState(false);

//     // 체크박스 상태 변경
//     const handleCheckboxChange = useCallback((index,event) => {
//     setSelectedItems((prevSelectedItems) => {
//         // "all"을 받은 경우 상품 전체 선택 또는 해제 처리
//         // setSelectedI(selectedI ? false : true)
//         if (index === "all") {
//             if(prevSelectedItems.length === date.length)
//             {
//                 setSelectedI(false)
//             }
//             else{
//                 setSelectedI(true)
//             }
//             return (prevSelectedItems.length === date.length ? [] : date.map((_, i) => i));
//         }
//         // 상품의 인덱스를 받은 경우 해당 상품 선택 또는 해제 처리
//         const isSelected = prevSelectedItems.includes(index);
//         return isSelected ? prevSelectedItems.filter((item) => item !== index) : [...prevSelectedItems, index];
//     });
//     }, [date]);




//     // 선택된 상품 삭제
//     const handleDeleteSelectedItems = useCallback(() => {
//         setDate((prevDate) => {
//             return prevDate.filter((item, index) => !selectedItems.includes(index));
//         });
//         setSelectedItems([]);
//     }, [selectedItems, setDate]);


//         // 예약 인원 수 변경

//         const onclickP=(index)=>{
//             const count = date[index].count
//             setDate((prevDate) => {
//                 const newDate = [...prevDate];
//                 newDate[index] = {...newDate[index], count:count+1};
//                 return newDate;
//             });
    
//         }
//         const onclickM=(index)=>{
//             const count = date[index].count
//             if (count<=0){
//                 setDate((prevDate) => {
//                     const newDate = [...prevDate];
//                     newDate[index] = {...newDate[index], count:0};
//                     return newDate;
//                 });
//             }
//             else{
//                 setDate((prevDate) => {
//                     const newDate = [...prevDate];
//                     newDate[index] = {...newDate[index], count:count-1};
//                     return newDate;
//                 });
//             }
            
    
//         }

//     // 선택한 상품의 총 금액 계산
//     const getTotalPrice = () => {
//         let totalPrice = 0;
//         selectedItems.forEach((index) => {
//             // 상품 가격에 수량을 곱해서 총 가격 계산
//             totalPrice += date[index].price * date[index].count;
//         });
//         //선택된 상품이 없을 때는 0으로 반환
//         return selectedItems.length === 0 ? '0원' : new Intl.NumberFormat().format(totalPrice) + '원';
//     };

//         // 최종 결제하기
//     const handleFinalPayment = () => {
//             alert("결제창으로 넘어갑니다.");
//         };
    
//     return (
//         <>
//         <div className="reservation">
//             <section id="reservation_title">
//             <div>
//                 <h1>예약 현황</h1>
//                 <h4>총 {date.length}개</h4>
//             </div>
//             </section>

//         {/* 예약현황 타이틀 */}
//         <section id="reservation_main">
//             <div className="table">
//                 <table className="reservation_table">
//                 <thead>
//                     <tr>
//                         {/* 상품 전체 선택 체크박스 */}
//                         <th type="col" class="entire_checkbox">
//                         <em className="entire_checkbox">
//                                 <input
//                                     type="checkbox"
//                                     id="checkbox"
//                                     name="checkbox"
//                                     onChange={() => handleCheckboxChange("all")} 
//                                     checked={selectedI}/>
//                             </em>
//                         </th>
//                     </tr>
//                 </thead>

//                 <tbody>
//                     {/* 예약 목록 */}
//                     {date.map((array, index) => (
//                         <tr key={index} className="n">
//                             {/* 상품 선택 체크박스 */}
//                             <td className="checkbox">
//                                 <input
//                                     type="checkbox"
//                                     onChange={() => handleCheckboxChange(index)}
//                                     checked={selectedItems.includes(index)} />
//                             </td>
//                             {/* 이미지 */}
//                             <td className="reservation_img">
//                                 <img src={array.url} />
//                                 </td>
//                             {/* 예약명 */}
//                             <td className="reservation_name">
//                                 {array.name}
//                             </td>
//                             {/* 예약자 수 */}
//                             {/* <td className="col">
//                                 <input
//                                     type="number"
//                                     value={array.count}
//                                     onChange={(e) => handleQuantityChange(index, parseInt(e.target.value))}
//                                 />
//                                 </td> */}
//                         {/* 예매 인원 */}
//                             <td className="reservation_number">
//                                 <button class="reservation_btn" onClick={()=>onclickM(index)}>-</button> 
//                                     {/* <input type="number">{count}></input> */}
//                                     <span>{array.count}</span>
//                                     <button class="reservation_btn"onClick={()=>onclickP(index)}>+</button>
//                                 </td>
//                             {/* 상품 가격 */}
//                             <td className="col">{array.price}</td>
//                         </tr>
//                     ))}
//                  </tbody>
//                     </table>
//                 </div>
//             </section>

//             {/* 선택 삭제 버튼 */}
//             <div className="reservation_controls">
//                     <h5 className="numberOfProduct">선택상품 {selectedItems.length}개</h5>
//                     <button onClick={handleDeleteSelectedItems}>예약취소</button>
//                 </div>

//             {/* 총 금액 */}
//                 <section id="total_price">          
//                     <div className="total_order_price">
//                     <h3 className="order_price">총 금액: {getTotalPrice()}</h3>
//                     </div>
//                 </section>

//             {/* 최종 결제 버튼 */}
//             <div className="button_group">
//                 <button onClick={handleFinalPayment}>결제</button>
//             </div>
//         </div>
//         </>
//     );
// };

import { useCallback, useState } from "react";
import { AdminFlagContext } from "../providers/Flag";
import { useContext } from "react";
//import {Item} from "../components/Item";
import "./Reservation.css";

export const Reservation = () => {
    const { date, setDate } = useContext(AdminFlagContext);
    const [selectedItems, setSelectedItems] = useState([]);
    const [selectedI, setSelectedI] = useState(false);
    //const [count, setCount] = useState(0);

    // 체크박스 상태 변경
    const handleCheckboxChange = useCallback((index, event) => {
        setSelectedItems((prevSelectedItems) => {
            if (index === "all") {
                if (prevSelectedItems.length === date.length) {
                    setSelectedI(false);
                } else {
                    setSelectedI(true);
                }
                return prevSelectedItems.length === date.length ? [] : date.map((_, i) => i);
            }
            const isSelected = prevSelectedItems.includes(index);
            return isSelected ? prevSelectedItems.filter((item) => item !== index) : [...prevSelectedItems, index];
        });
    }, [date]);

    // 선택된 상품 삭제
    const handleDeleteSelectedItems = useCallback(() => {
        if (window.confirm("예매를 취소하시겠습니까?")) {
        setDate((prevDate) => {
            return prevDate.filter((_item, index) => !selectedItems.includes(index));
        });
        setSelectedItems([]);
        }
    }, [selectedItems, setDate]);

    // 예약 인원 수 변경
    const onclickP=(index)=>{
        const count = date[index].count
            setDate((prevDate) => {
                const newDate = [...prevDate];
                newDate[index] = {...newDate[index], count:count+1};
                return newDate;
            });
    }
    const onclickM=(index)=>{
        const count = date[index].count
            if (count<=0){
                setDate((prevDate) => {
                    const newDate = [...prevDate];
                    newDate[index] = {...newDate[index], count:0};
                    return newDate;
                });
            }
            else {
                setDate((prevDate) => {
                    const newDate = [...prevDate];
                    newDate[index] = {...newDate[index], count:count-1};
                    return newDate;
                });
            }
    }

    // 선택한 상품의 총 금액 계산
    const getTotalPrice = () => {
        let totalPrice = 0;
        selectedItems.forEach((index) => {
            totalPrice += date[index].price * date[index].count;
        });
        return selectedItems.length === 0 ? '0원' : new Intl.NumberFormat().format(totalPrice) + '원';
    };

    // 최종 결제하기
    const handleFinalPayment = () => {
        if (window.confirm("예약을 확정하시겠습니까?")) {
            alert("결제창으로 넘어갑니다.");
        } else {
            alert("이전으로 돌아갑니다.");
        }
    };

    return (
        <>
            <div className="reservation">
                <section id="reservation_title">
                    <div>
                        <h1>예매 내역</h1>
                        <div class="reservation_line"></div>
                        <h4>총 {date.length}매</h4>
                    </div>
                </section>

                {/* 예약현황 타이틀 */}
                <section id="reservation_main">
                    <div className="reservation_list">

                        <div className="reservation_controls">
                            {/* 상품 전체 선택 체크박스 */}
                            <div class="entire_checkbox">
                                    <input
                                        type="checkbox"
                                        id="checkbox"
                                        onChange={() => handleCheckboxChange("all")} 
                                        checked={selectedI}/> 
                            </div>
                            {/* 예약 취소 버튼 */}
                            <div className="cancel_btn">
                                <button onClick={handleDeleteSelectedItems}>예매취소</button>
                            </div>
                        </div>

                        {/* 예약 목록 */}
                        {date.map((array, index) => (
                            <div key={index} className="reservation_item">

                                <div className="item_info">
                                {/* 상품 선택 체크박스 */}
                                <input
                                        type="checkbox"
                                        id="select_checkbox"
                                        onChange={() => handleCheckboxChange(index)}
                                        checked={selectedItems.includes(index)}
                                />
                                {/* 이미지 */}
                                <img src={array.url[index]} className="reservation_img" alt="" />
                                {/* 예약명 */}
                                <div className="reservation_name">{array.name}</div>
                                {/* 티켓 금액 */}
                                <div className="reservation_price">{array.price + '원'}</div>
                                </div>

                                {/* 예매 인원 */}
                                <div className="reservation_number">
                                    <p>인원 수</p>
                                    <button className="reservation_btn" onClick={() => onclickM(index)}>-</button>
                                    <span>{array.count}</span>
                                    <button className="reservation_btn" onClick={() => onclickP(index)}>+</button>
                                </div>

                            </div>
                        ))}
                    </div>
                </section>

                <div class="reservation_line"></div>

                {/* 총 금액 */}
                <div className="payment">
                        <h5 className="numberOfProduct">선택상품 {selectedItems.length}개</h5>
                        <h3 className="order_price">최종 결제금액: {getTotalPrice()}</h3>
                    {/* 최종 결제 버튼 */}
                    <div className="payment_btn">
                        <button onClick={handleFinalPayment}>결제하기</button>
                    </div>
                </div>
            </div>
        </>
    );
};