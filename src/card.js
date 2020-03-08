import React from 'react';

export function Card(props)
{
return (

<div className="card-deck m-5">
  <div className="card">
  <img className="card-img-top" src="..." alt="Card image cap"></img>
    <div className="card-body">
      <h5 className="card-title">The Power of A Positive Attitude: Your Road To Success</h5>
      <p className="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
      <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
    </div>
  </div>
  <div className="card">
  <img className="card-img-top" src="..." alt="Card image cap"></img>
    <div className="card-body">
      <h5 className="card-title">The Power of Your Subconscious Mind</h5>
      <p className="card-text">This card has supporting text below as a natural lead-in to additional content.</p>
      <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
    </div>
  </div>
  <div className="card">
  <img className="card-img-top" src="" alt="Card image cap"></img>
    <div className="card-body">
      <h5 className="card-title">Think and Grow Rich</h5>
      <p className="card-text">Think And Grow Rich has earned itself the reputation of being considered a textbook for actionable techniques that can help one get better at doing anything, not just by rich and wealthy, but also by people doing wonderful work in their respective fields. There are hundreds and thousands of successful people in the world who can vouch for the contents of this book. At the time of author’s death, about 20 million copies had already been sold</p>
      <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
    </div>
  </div>
</div>


)
}