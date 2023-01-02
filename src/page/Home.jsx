import React,{useState,useEffect} from 'react'
// import Mainbar from '../componet/Mainbar'
// import Sidebar from '../componet/Sidebar'
import Card from '../componet/card'
import axios from 'axios'
import Sidebar from '../componet/Sidebar';

export default function Home() {
  const [products, setProduct] = useState([]);
  // console.log(products);
  useEffect(() => {
    axios.get('https://grocery-backend-nine.vercel.app/getallproduct')
      .then((res) => {
        const data = res.data.output;
        setProduct(data);
      });
  }, []);
  
  return (
    <div>
      <div className="mainbar">
      {
        products.map((n) => (<Card key={n._id} prodid={n._id} title={n.title} catogery={n.catogery} imgurl={n.imgurl} detail={n.detail} discount={n.discount} price={n.price}/>))
      }
      </div>
      <Sidebar setProduct={setProduct} page="All" products={products}/>
    </div>
  )
}
