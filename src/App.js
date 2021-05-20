import React, { useState } from 'react';
// import {
//   BrowserRouter as Router,
//   Route,
//   Switch } from 'react-router-dom';
// import NavBar from './components/NavBar'
import './App.css';
import Products from './pages/Products'
import Cart from './pages/Cart'



const PAGE_PRODUCTS = "products"
const PAGE_CART = "cart"

function App() {

  
  const [page, setPage] = useState(PAGE_PRODUCTS)
  const [cart, setCart] = useState([])

  const addToCart = (product) => {
    let itemInCart = cart.find(item => product.name === item.name);

    let newCart = [...cart]
    if(itemInCart) {
      itemInCart.quantity++;
    } else {
      itemInCart = {
        ...product,
        quantity: 1
      }
      newCart.push(itemInCart)
    }
    setCart(newCart);
  }

  const clearCart = () => {
    setCart([])
  }

  const getCartTotal = () => {
    return cart.reduce((sum, { quantity }) => sum + quantity, 0)
  }

  const removeFromCart = (productToRemove) => {
    setCart(cart.filter(product => product !== productToRemove))
  }

  // const getTotalSum = () => {
  //   return cart.reduce((sum, {cost}) => sum + cost, 0)
  // }

  const navigateTo = (nextPage) => {
    setPage(nextPage)
  }

  
  return (
    <div className="App">
      {/* <NavBar /> */}
      <header>
        <button onClick={() => navigateTo(PAGE_CART)}>Go to Cart ({getCartTotal()})</button>
        <button onClick={() => navigateTo(PAGE_PRODUCTS)}>View products</button>
      </header>
      {page === PAGE_PRODUCTS && <Products addToCart={addToCart} /> }
      {page === PAGE_CART && <Cart clearCart={clearCart} cart={cart} removeFromCart={removeFromCart} /> }
    </div>
  );
}

export default App;
