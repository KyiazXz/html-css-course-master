import React from 'react'
import "./section3.css"
export default function Section3() {
  return (
    <main>
   <article className="product">
  <h2 className="product-title">Converse Chuck Taylor All Star Low Top</h2>
  <div className="container clearfix">
  <img
    src="https://i.imgur.com/ZrTU3VK.jpeg"
    alt="Chuck Taylor All Star Shoe"
    height="250"
    width="250"
       className="product-img"
  />
  <div className="product-info">
      <p className="price"><strong>$65.00</strong></p>
      <p className="shipping">Free shipping</p>
  <p className="sale">Sale</p>
  
    <p className="product-description">
      Ready to dress up or down, these classNameic canvas Chucks are an everyday
      wardrobe staple.
    </p>
    <a href="https://converse.com" target="_blank" className="more-info">More information &rarr;</a>
  
  <div className="colors">
    <div className="color"></div>
    <div className="color color-blue"></div>
    <div className="color color-red"></div>
    <div className="color color-yellow"></div>
    <div className="color color-green"></div>
    <div className="color color-brown"></div>
  </div>
  </div>
   
  <div className="product-details">
    <h3 className="details-title">Product details</h3>
    <ul className="details-list">
      <li>Lightweight, durable canvas sneaker</li>
      <li>Lightly padded footbed for added comfort</li>
      <li>Iconic Chuck Taylor ankle patch.</li>
    </ul>
  </div>
  </div>
  <button className="add-cart">Add to cart</button>
</article>
    </main>
  )
}
