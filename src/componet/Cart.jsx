import axios from 'axios';
import React, { useState, useEffect } from 'react'
import Cartcard from './cartcard'
import { Link } from 'react-router-dom'
export default function Cart() {


  const [ap, setAp] = useState(0);
  const [dp, setDp] = useState(0);
  const [tp, setTp] = useState(0);

  const [fullCartDetails, setFullCart] = useState([]);

  useEffect(() => {
    let cookie = document.cookie;
    cookie = cookie.split("=");
    const token = cookie[1];
    axios.post('https://grocery-backend-nine.vercel.app/fetchCart', { token })
      .then(res => {
        let abc = res.data.fullCartDetails;
        setFullCart(abc);
      })
  }, []);

  const clickHandler = () => {

    let mrp = 0;
    let discount = 0;

    for (let i = 0; i < fullCartDetails.length; i++) {
      mrp = mrp + (fullCartDetails[i]._doc.price * fullCartDetails[i].quantity);
      discount = discount + ((fullCartDetails[i]._doc.price * fullCartDetails[i]._doc.discount) / 100) * fullCartDetails[i].quantity;
    }
    let total = mrp - Math.floor(discount) + 40;
    setAp(mrp);
    setDp(Math.floor(discount));
    setTp(total);
  }



  const quantityHandler = (id, flag, quantity, setQuantity) => {
    let finalQuantity = quantity;
    if (flag === 0) {
      console.log(quantity);
      if (quantity === 1) {
        // remove from cart
        finalQuantity = 0;
        console.log(finalQuantity);
      } else {
        finalQuantity = finalQuantity - 1;
      }

    } else {
      finalQuantity = finalQuantity + 1;
    }
    let cookie = document.cookie;
    cookie = cookie.split("=");
    const token = cookie[1];
    axios.post("https://grocery-backend-nine.vercel.app/updateQuantity", { finalQuantity, token, id })
      .then((res) => {
        setQuantity(finalQuantity);
        console.log(res);
      })

    // let fullCartDetails_ = fullCartDetails;
    // for(let x=0;x<fullCartDetails_.length;x++){
    //   let singleCart = fullCartDetails_[x];
    //   if(singleCart._doc._id === id){
    //     singleCart.quantity = finalQuantity;
    //     break;
    //   }
    // }

    let fullCartDetails_ = [];
    for (let x = 0; x < fullCartDetails.length; x++) {
      console.log(finalQuantity);
      let singleCart = fullCartDetails[x];
      if (singleCart._doc._id === id) {
        if (finalQuantity !== 0) {
          singleCart.quantity = finalQuantity;
          fullCartDetails_.push(singleCart);
        }
      } else {
        fullCartDetails_.push(singleCart);
      }
    }
    console.log(fullCartDetails_);
    setFullCart(fullCartDetails_);
    clickHandler();
  }

  return (
    <div className='cart' onLoad={clickHandler}>
      <div className="cartleft">
        {fullCartDetails.map((n) => (
          <Cartcard key={n._doc._id} prodid={n._doc._id} title={n._doc.title} catogery={n._doc.catogery} imgurl={n._doc.imgurl} detail={n._doc.detail} discount={n._doc.discount} price={n._doc.price} quantity={n.quantity} quantityHandler={quantityHandler} />
        ))}
        <div className="placeorder">
          <button><Link to="/address">Place Order</Link></button>
        </div>
      </div>
      <div className="cartright">
        <div className="ap samecart"><span>MRP: </span> <span>{ap}</span></div>
        <div className="dp samecart"><span>Discount: </span>-{dp}</div>
        <div className="delp samecart"><span>Delivery: </span> <span>40</span></div><hr />
        <div className="tp samecart"><span>Total: </span> <span>{tp}</span></div>
      </div>
    </div>
  )
}
