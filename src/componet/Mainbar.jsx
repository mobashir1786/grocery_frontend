import React from 'react'
import Card from './card'

export default function Mainbar(props) {
  const [product, setProduct] = React.useState(props.data);
  console.log(product);
  return (
    <div className='mainbar'>
      {product.length > 0 ?
        product.map((n) => (<Card key={n._id} title={n.title} catogery={n.catogery} imgurl={n.imgurl} detail={n.detail} discount={n.discount} price={n.price} />))
        :
        "Product not fount in this catogery"
      }
    </div>
  )
}
