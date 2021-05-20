import React, { useState } from 'react'


import iphone from '../images/iphone.jpg';
import galaxyA52 from '../images/sam1.jpg';
import zFlip from '../images/z-flip.jpg'; 

const PHONES = "phones";
const GADGETS = "gadgets";
const TELEVISION = "television";


const Products = ({addToCart}) => {

  const [products] = useState([
    {
      cartegory: PHONES,
      name: "iphone",
      cost: 100,
      image: iphone
    },
    {
      cartegory: TELEVISION,
      name: "A70",
      cost: 100,
      image: galaxyA52
    },
    {
      cartegory: GADGETS,
      name: "Z-Flip",
      cost: 120,
      image: zFlip
    }
  ])

  const [cartegory, setCartegory] = useState([PHONES])

  const getProductsInCartegory = () => {
    return products.filter(product => product.cartegory === cartegory)
  }

return (
  <>
      <h1>Products</h1>
      Select a cartegory
        <select onChange={(e) => setCartegory(e.target.value)}>
          <option value={PHONES}>{PHONES}</option>
          <option value={TELEVISION}>{TELEVISION}</option>
          <option value={GADGETS}>{GADGETS}</option>
        </select>
      <div className="products">
       
      {
        getProductsInCartegory().map((product, index) => (
        <div className="product" key={index}>
          <h3>{product.name}</h3>
          <h4>${product.cost}</h4>
          <img src={product.image} alt={product.name} /><br />
          <button onClick={() => addToCart(product)}>Add to Cart</button>
        </div>
        ))
      }
      
      </div>
      </>
)}


export default Products;