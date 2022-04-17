import React from 'react';

/*
Challenge: Build the Card component
For now, hard-code in the data (like 
the rating, title, price, etc.)

Notes:
- Only render 1 instance (I already did this for you)
- The star icon and photo (katie-zaferes.png) are in the images 
  folder for your use
- Make sure to include:
    - image
    - star icon (star.png), rating, and review count
    - title
    - cost/person
- The main purpose of this challenge is to show you where our limitations
  currently are, so don't worry about the fact that you're hard-coding all
  this data into the component.
*/

/*
Challenge:

- import the array of data from data.js
- map over the array to create <Card /> components
- display the array of card components under the navbar
  (in place of the current <Card /> component)

Note: We haven't styled the group of components yet, so they'll
still be block elements, stacked vertically. We'll add styling later.
*/

export default function Card(props) {
  return (
    <div className="card">
      {props.item.openSpots === 0 && (
        <div className="card--badge">SOLD OUT</div>
      )}
      <img
        className="card--image"
        src={props.item.coverImg}
        alt={props.item.alt}
      ></img>
      <div className="card--info">
        <img className="star" src="/images/star.png" alt="star"></img>
        <span className="rating">{props.item.stats.rating}</span>
        <span className="review">({props.item.stats.reviewCount})</span>
        <span>•</span>
        <span className="country">{props.item.location}</span>
        <span>•</span>
        <span className="status">
          {props.item.status === 'Online' && (
            <span className="user--online">Online</span>
          )}
          {props.item.status === 'Offline' && (
            <span className="user--offline">Offline</span>
          )}
        </span>
      </div>
      <p className="card--title">{props.item.title}</p>
      <p className="card--pricing">
        <b>From ${props.item.price}</b> / person
      </p>
    </div>
  );
}
