import React from 'react';
import axios from 'axios'

export default function Signup() {
    const inputStyle = { width: "27vw", borderRadius: "5px", height: "30px", backgroundColor: "#FFFFFF", border: "2px solid tomato" };
    const lebalStyle = { fontSize: "20px", marginTop: "10px" };
    const btnStyle = { backgroundColor: "tomato", padding: "8px 30px", marginTop: "10px", borderRadius: "15px", fontSize: "20px" };

    const handleSubmit = (event) => {
        event.preventDefault();
        const name = event.target[0].value;
        const number = event.target[1].value;
        const email = event.target[2].value;
        const password = event.target[3].value;

        console.log(name, number, email, password);
        axios.post("https://grocery-backend-nine.vercel.app/signup", { name: name, number: number, email: email, password: password })
            .then(res => {
                console.log(res)
                document.cookie = "token="+res.data.token+"; expires="+Date.now() + 1 * 24 * 60 * 60 * 1000;
                alert(res.data.message);
                window.location.href = 'https://grocery-shop-mobashir.netlify.app/'
            }).catch(e => {
                console.log(e);
            })
    }
    return (
        <div className="signup">
            <form onSubmit={handleSubmit}>
                <label style={lebalStyle}>Name</label><br />
                <input type="text" style={inputStyle} /><br />

                <label style={lebalStyle}>Phone Number</label><br />
                <input type="number" style={inputStyle} /><br />

                <label style={lebalStyle}>Email address</label><br />
                <input type="email" style={inputStyle} /><br />

                <label style={lebalStyle}>Password</label><br />
                <input type="password" style={inputStyle} /><br />

                <button style={btnStyle} type="submit" >Signup</button>
            </form>
        </div>
    )
}
