import React,{useState} from 'react'
import Card from './card'
import Sidebar from './Sidebar';

const Search = (props) => {
    // console.log(props.state);
    const [products, setProduct] = useState([props.state])
    // console.log(products);
    return (
        <div>
        {
            (products.length>0)?<div className="mainbar">
                {
                    products.map((n) => (<Card key={n._id} prodid={n._id} title={n.title} catogery={n.catogery} imgurl={n.imgurl} detail={n.detail} discount={n.discount} price={n.price} />))
                }
            </div>:<div mainbar>No Product Found</div>
        }
            
            <Sidebar setProduct={setProduct} page="All" products={products} />
        </div>
    );
}

export default Search;
