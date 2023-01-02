import React,{useState,useEffect} from 'react'
// import Mainbar from '../componet/Mainbar'
import Card from '../componet/card'
import Sidebar from '../componet/Sidebar'
import axios from 'axios'

export default function Dryfruit() {
  const [products, setProduct] = useState([]);
  useEffect(() => {
    axios.get('https://grocery-backend-nine.vercel.app/dryfruit')
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
    <Sidebar setProduct={setProduct} page="dryfruit"/>
    </div>
  )
}
