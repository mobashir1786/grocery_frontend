// import axios from 'axios';
import React from 'react';

const Cartcard = (props) => {
    const [quantity, setQuantity] = React.useState(props.quantity);
    // const quantityHandler = (id, flag) => {
    //     let finalQuantity = quantity;
    //     if(flag == 0){
    //         if(quantity == 1){
    //             // remove from cart
    //             return;
    //         }
    //        finalQuantity = finalQuantity - 1;
    //     }else{
    //         finalQuantity = finalQuantity + 1;
    //     }
    //     let cookie = document.cookie;
    //     cookie = cookie.split("=");
    //     const token = cookie[1];
    //     axios.post("http://localhost:4000/updateQuantity",{finalQuantity, token, id})
    //     .then((res) => {
    //         setQuantity(finalQuantity);
    //         console.log(res);
    //     })
    // }
    // console.log(props.quantity);
    return (
        <div className='cartcard'>
            <div className="cartcardleft">
                <img src={props.imgurl} alt={props.title} />
                <div className="cartproductDetail">
                    <div className="title">{props.title}</div>
                    <div className="price">
                        <div className="rs material-symbols-outlined">currency_rupee</div>
                        <div className="cp p">:{(props.price-Math.floor((props.price*props.discount)/100)) * quantity }</div>
                        <div className="rs material-symbols-outlined">currency_rupee</div>
                        <div className="ap p">:<del>{props.price * quantity}</del></div>
                        <div className="discount p">{props.discount} % Off</div>
                    </div>
                </div>
            </div>

            <div className="btn1 ">
                <button onClick={()=>{props.quantityHandler(props.prodid, 0, quantity, setQuantity)}}>-</button>
                <b>{quantity}</b>
                <button onClick={()=>{props.quantityHandler(props.prodid, 1, quantity, setQuantity)}}>+</button>
            </div>
        </div>
    );
}

export default Cartcard;
