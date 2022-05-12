
function Card(props) {
    return (<>
    
      <div className="cards">
        <img src={props.img} />
        <div className="namePrice">
        <h5>Title: {props.title}</h5>
        <h6>{props.price}$</h6>
        </div>
        <div>
            <p>Description: {props.desc}</p>
        </div>
        <div className="btns">
        <button onClick={props.action1}>Add to Cart</button>
        <button id="plus" onClick={props.action2}>+</button>
        </div>
      </div>
    </>)
  
  }
  export default Card;