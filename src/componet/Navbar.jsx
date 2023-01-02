import React ,{useState}from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

const Navbar = (props) => {
    const inputStyle = { width: "27vw", borderRadius: "5px", height: "30px", backgroundColor: "#FFFFFF", border: "2px solid tomato" };
    let [user] = useState("user");

    const HandleSubmit = (event) => {
        event.preventDefault();
        const searchData = event.target[0].value;
        // console.log(searchData);
        axios.post('http://localhost:4000/search',{
            searchData
        })
        .then(res=>{
            // console.log(res);
            props.setState(res.data.productData)
        })
        window.location.href = 'http://localhost:3000/search'
    }
    return (
        <div className='navbar'>
            <div className="navleft">
                <img src="https://static-assets-web.flixcart.com/fk-p-linchpin-web/fk-cp-zion/img/grocery-logo_fb537a.svg" alt="logo" />
            </div>
            <form className="middle" onSubmit={HandleSubmit}>
                <input type="text" style={inputStyle}/>
                <button className='material-symbols-outlined' type='submit' to="/search">search</button>
            </form>
            <ul className="navright">
                <li><Link to={document.cookie ? "/logout" : "/loginsignup"}>{document.cookie ? "Logout" : "Login/Signup"}</Link></li>
                {
                    user==="admin"? <li><Link to="/addproduct">Add Product</Link></li>: <li><Link to="/cart" className='material-symbols-outlined cartlogo'>shopping_cart<span id='cartValue'>0</span></Link></li>
                } 
            </ul>
        </div>
    );
}

export default Navbar;
