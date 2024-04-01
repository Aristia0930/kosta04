export const Item=({name,price,url})=>{

    return(
        <>
        <li>
            <span>{name}</span>
            <span>{price}</span>
            <img src={url}></img>

        </li>
        
        </>
    )
}