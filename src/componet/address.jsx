import axios from 'axios';
import React, { useState,useEffect } from 'react';

const Address = () => {
    const [cartValue, setCartValue] = useState(0);

    useEffect(() => {
        let cookie = document.cookie;
        cookie = cookie.split("=");
        const token = cookie[1];
        let abc = {
            mrp: 0,
            discount: 0,
            total: 0
        };
        axios.post('https://grocery-backend-nine.vercel.app/placeorder', { token })
            .then(res => {
                abc = res.data.finalCartValue;
                setCartValue(abc)
            })
    }, []);

    const handleSubmit = (event) => {
        event.preventDefault();
        const name = event.target[0].value;
        const number = event.target[1].value;
        const pincode = event.target[2].value;
        const state = event.target[3].value;
        const add = event.target[4].value;
        // console.log(name, number, pincode, state, add);

        let cookie = document.cookie;
        cookie = cookie.split("=");
        const token = cookie[1];
        axios.post('https://grocery-backend-nine.vercel.app/orderdetail',{name, number, pincode, state, add, token})
        .then(res => {
            console.log(res);
            document.getElementById("cartValue").innerHTML = 0;
            alert("Your Order Is Placed Successfully");
            window.location.href = "http://localhost:3000/"
        })

    }
    return (
        <div className='address'>
            <form onSubmit={handleSubmit}>
                <input type="text" className='name same1' placeholder='Full Name' required/>
                <input type="number" className='number same1' placeholder='10 Digit Mobile No' required/>
                <input type="text" className='pin same1' placeholder='6 Digit Pin Code' required/>
                <input type="text" className='state same1' placeholder='State' required/>
                <input type="text" className='add' placeholder='Full Address' required/>
                <input type="submit" className='conformorder' value="Conform Order" />
            </form>
            <div className="cartright">
                <div className="ap samecart"><span>MRP: </span> <span>{cartValue.mrp}</span></div>
                <div className="dp samecart"><span>Discount: </span>-{cartValue.discount}</div>
                <div className="delp samecart"><span>Delivery: </span> <span>40</span></div><hr />
                <div className="tp samecart"><span>Total: </span> <span>{cartValue.total}</span></div>
            </div>
        </div>
    );
}

export default Address;
