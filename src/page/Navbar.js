import React from 'react'
import './css/style.css'
export default function Navbar() {
  return (
    <div>
      <div class="navbar">
  <div class="navbar-logo">@akshay </div>
  <div class="navbar-links">
    <div class="circle-text">Home</div>
    <a href="#" class="navbar-link">About</a>
    <a href="#" class="navbar-link">Services</a>
    <a href="#" class="navbar-link">Portfolio</a>
    <a href="#" class="navbar-link">Contact</a>
  </div>
  <button class="sign-in-btn">Sign In</button>
  <button class="sign-up-btn">Sign Up</button>
</div>


    </div>
  )
}
