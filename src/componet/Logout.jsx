import React from 'react';

const Logout = () => {
    document.cookie = "token=; expires=Thu, 01 Jan 1970 00:00:01 GMT";
    document.location.href = "https://grocery-shop-mobashir.netlify.app//loginsignup"
    return (
        <div>
            
        </div>
    );
}

export default Logout;
