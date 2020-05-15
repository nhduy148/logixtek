import React from 'react';
import { Link } from "react-router-dom"

export default function List({data}) {
    
    return (
        <>
            <h2>List Products</h2>
            <div className="list">
                {
                    data.length > 0
                        ? data.map( item => 
                                <div className="item" key={item.id}>
                                    <Link to={`item/${item.id}`}>
                                        <div className="thumb">
                                            <img src={item.thumb} alt=""/>
                                        </div>
                                        <p>ID: {item.id}</p>
                                        <p>Price: {item.price}</p>
                                        <p>Num of Bid: {item.num_of_bid}</p>
                                        <p>Highest Price: {item.highest_price}</p>
                                    </Link>
                                </div>
                            )
                        : <p>No item.</p>
                }
            </div>
        </>
    )
}
