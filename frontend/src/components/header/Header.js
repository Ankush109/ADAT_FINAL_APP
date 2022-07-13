import React from 'react'
import { Link } from 'react-router-dom'
import "./header.css"
const Header = () => {
  return (
    <div class="topnav">
     
    <a class="active" href="/">Home</a>
    <a href="/login">Login/Register</a>
    <a href="/products">Products</a>
    <a href="/orders">Orders</a>
    <a href="/cart">Cart</a>
    <a href="/about">About</a>
 
    <a href="#">(This is a Beta Version)</a>

  </div>
  )
}

export default Header