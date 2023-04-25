import axios from 'axios';
import React from 'react';

export default function Login() {
    const inputStyle = { width: "27vw", borderRadius: "5px", height: "30px", backgroundColor: "#FFFFFF", border: "2px solid tomato" };
    const lebalStyle = { fontSize: "20px", marginTop: "10px" };
    const btnStyle = { backgroundColor: "tomato", padding: "8px 30px", marginTop: "10px", borderRadius: "15px", fontSize: "20px" };

    const handleSubmit = (event) => {
        event.preventDefault();
        const email = event.target[0].value;
        const password = event.target[1].value;
        console.log(email, password);

        axios.post("https://grocery-backend-nine.vercel.app/login", { email: email, password: password })
            .then(res => {
                console.log(res)
                if (res.data.key === 1) {
                    document.cookie = "token=" + res.data.token + "; expires=" + Date.now() + 1 * 24 * 60 * 60 * 1000;
                    window.location.href = 'https://grocery-shop-mobashir.netlify.app/'
                } else {
                    alert(res.data.message);
                }
            }).catch(e => {
                console.log(e);
            })
    }
    return (
        <div className='login'>
            <form onSubmit={handleSubmit}>
                <label style={lebalStyle}>Email address</label><br />
                <input type="email" style={inputStyle} /><br />

                <label style={lebalStyle}>Password</label><br />
                <input type="password" style={inputStyle} /><br />

                <button style={btnStyle} type="submit" >Login</button>
            </form>
        </div>
    )
}
