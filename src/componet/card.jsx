import React, { useState } from 'react'
import axios from 'axios';

export default function Card(props) {
    const [quantity, setQuantity] = useState(1);
    const [stock] = useState(2);
    // const [cartValue, setCartValue] = useState([]);
    // useEffect(() => {
    //     console.log(cartValue);
    //     const prodid = cartValue[0];
    //     const qu = cartValue[1];
    //     // const cook = getCookie();
    //     // document.getElementById("cartValue").innerHTML = 1;
    //     // console.log(props.title,props.discount, props.price,)
    // }, [cartValue]);

    function handlerAddToCart(array){
        const prod_id = array[0];
        const quantity = array[1];
        let cookie = document.cookie;
        cookie = cookie.split("=");
        console.log(prod_id);
        console.log(cookie.length);
        if(cookie.length === 1){
            window.location.href = "https://grocery-shop-mobashir.netlify.app/loginsignup";
            return;
        }
        const token = cookie[1];
        axios.post('https://grocery-backend-nine.vercel.app/addtocart',{
            prod_id,quantity,token
        })
        .then(res=>
            {
                console.log(res);
                document.getElementById("cartValue").innerHTML = res.data.lengthOfCart;
            }
            )

    }
    return (
        <div className='card'>
            <img src={props.imgurl} alt={props.title} />
            <h2 className="title">{props.title}</h2>
            <div className="price">
                <div className="rs material-symbols-outlined">currency_rupee</div>
                <div className="cp p">:{props.price-Math.floor((props.price*props.discount)/100)}</div>
                <div className="rs material-symbols-outlined">currency_rupee</div>
                <div className="ap p">:<del>{props.price}</del></div>
                <div className="discount p">{props.discount}% Off</div>
            </div>
            <div className="btn">
                <div className="btn1">
                    <button onClick={() => {setQuantity(quantity - 1) }}>-</button>
                    <b>{quantity}</b>
                    <button onClick={() => { setQuantity(quantity + 1) }}>+</button>
                </div>
                <div className="btn2">
                    {
                        stock > 0 ? <button onClick={()=>{handlerAddToCart([props.prodid,quantity])}}>Add to cart</button> : <b>Currently unavailable</b>
                    }
                </div>
            </div>
        </div>
    )
}
