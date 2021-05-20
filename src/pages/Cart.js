import React from 'react'

export default function Cart({removeFromCart, clearCart, cart }) {
  
  const getTotalSum = () => {
    return cart.reduce((sum, { cost, quantity }) => sum + cost*quantity, 0)
  }

  return (
    <>
        <h1>Cart</h1>
        {cart.length > 0 &&
        (<button onClick={clearCart}>Clear Cart</button>)}
        <div className="products">
        
        {
          cart.map((product, index) => (
          <div className="product" key={index}>
            <h3>{product.name}</h3>
            <h4>${product.cost}</h4>
            <h4>Quantity: {product.quantity}</h4>
            <img src={product.image} alt={product.name} /><br />
            <button onClick={() => removeFromCart(product)}>Remove from cart</button>
          </div>
          ))
        }
        
        </div>
        <div>
          Total Cost: ${getTotalSum()}
        </div>
    </>
  )
}


