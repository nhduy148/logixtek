import React, { useState, useEffect } from 'react';

export default function Details(props) {
  const [item, setItem] = useState(null);
  const ID = props.match.params.id;

  useEffect(() => {
    getDetails(ID);
  }, [ID])
  
  const getDetails = (id) => {
    fetch(`http://localhost:5000/item/${id}`)
    .then( res => res.json() )
    .then( result => setItem(result) )
    .catch( err => console.log(err) )
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    const data = { highest_price: e.target.highest_price.value }    

    fetch(`http://localhost:5000/item/${ID}`, {
      method: "PUT",
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    })
    .then( res => res.json() )
    .then( result => {
      alert(result.statusText)
      if( result.status === true ) getDetails(ID);
    } )
    .catch( err => console.log(err) )
  }

  return !!item
  ? <div className="details">
      <h2>Details: Product ID {item.id}</h2>
      <div className="product">
        <div className="image">
          <img src={item.thumb} alt=""/>
        </div>
        <div className="info">
          <p>Original price: {item.price}</p>
          <p>Num of Bid: {item.num_of_bid}</p>
          <p>Highest Price: {item.highest_price}</p>
          <p>Bid date: {item.date}</p>
          <form onSubmit={(e) => handleSubmit(e)} ><p>Bid: <input type="number" name="highest_price" /> <button type="submit">Submit</button></p></form>
        </div>
      </div>
      <div className="comments">
        <h2>Comments</h2>
        <div className="comment-item">
          User 1: Comment 1
        </div>
        <div className="comment-item">
          User 2: Comment 2
        </div>
      </div>
    </div>
  : <p>Have problem!</p>
}
