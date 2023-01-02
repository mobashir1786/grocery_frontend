import React from 'react';
import { Link } from 'react-router-dom';

const SubNavbar = () => {
    return (
        <div className='subnav'>
            <ul className="subitem">
                <li><Link to="/">All Catogery</Link></li>
                <li><Link to="/fruits">Fruits</Link></li>
                <li><Link to="/vegetables">Vegetables</Link></li>
                <li><Link to="/sweets">Sweets</Link></li>
                <li><Link to="/dryfruites">Dry Fruites</Link></li>
                <li><Link to="/dairy">Dairy</Link></li>
            </ul>
        </div>
    );
}

export default SubNavbar;