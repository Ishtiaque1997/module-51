import React from 'react';

const Card = (props) => {
 const{name,img,description}=props.item
 return (
 <div className="col">
    <div className="card">
      <img src={img}className="card-img-top" alt="..."/>
      <div className="card-body">
        <h5 className>{name}</h5>
        <p className="card-text">This is a longer card with supporting text below as a natural lead-in to additional content.</p>
      </div>
    </div>
  </div>
 );
};

export default Card;