import React from 'react'
import "./section3.css"
export default function Section3() {
  return (
    <main>
   <article class="product">
  <h2 class="product-title">Converse Chuck Taylor All Star Low Top</h2>
  <div class="container clearfix">
  <img
    src="https://i.imgur.com/ZrTU3VK.jpeg"
    alt="Chuck Taylor All Star Shoe"
    height="250"
    width="250"
       class="product-img"
  />
  <div class="product-info">
      <p class="price"><strong>$65.00</strong></p>
      <p class="shipping">Free shipping</p>
  <p class="sale">Sale</p>
  
    <p class="product-description">
      Ready to dress up or down, these classic canvas Chucks are an everyday
      wardrobe staple.
    </p>
    <a href="https://converse.com" target="_blank" class="more-info">More information &rarr;</a>
  
  <div class="colors">
    <div class="color"></div>
    <div class="color color-blue"></div>
    <div class="color color-red"></div>
    <div class="color color-yellow"></div>
    <div class="color color-green"></div>
    <div class="color color-brown"></div>
  </div>
  </div>
   
  <div class="product-details">
    <h3 class="details-title">Product details</h3>
    <ul class="details-list">
      <li>Lightweight, durable canvas sneaker</li>
      <li>Lightly padded footbed for added comfort</li>
      <li>Iconic Chuck Taylor ankle patch.</li>
    </ul>
  </div>
  </div>
  <button class="add-cart">Add to cart</button>
</article>
    </main>
  )
}
