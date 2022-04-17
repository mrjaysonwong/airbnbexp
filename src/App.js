import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Card from './components/Card';

import airbnbData from './data';

/*
Challenge: Build the Navbar component.
Check the Figma file for the design specifics.
*/

/*
Challenge: Pass props to the Card component and display that data

- img ("katie-zaferes.png")
- rating ("5.0")
- reviewCount (6)
- country (Whatever you want)
- title ("Life Lessons with Katie Zaferes")
- price (136)

*/

export default function App() {
  const cards = airbnbData.map((item) => (
    <Card
      key={item.id}
      item={item}
      // {...item} //ES6
    />
  ));
  return (
    <div>
      <Navbar />
      <Hero />
      <h2 className="best--sellers">Best sellers</h2>
      <section className="card--section">
        {cards}
      </section>
    </div>
  );
}
