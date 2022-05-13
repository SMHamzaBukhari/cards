
function Card(props) {
  let i =0;
  const addtocart = ()=>{
    console.log("Title : "+ props.title + '\n' +
          "Price : " + props.price + '\n'+
          "Description : "+ props.desc + '\n'+
          "Category : "+ props.category + '\n'+
          "Quantity: ", i++);
}


    return (<>
    
      <div className="cards">
        <img src={props.img} />
        <div className="namePrice">
        <h5>Title: {props.title}</h5>
        <h6>{props.price}</h6>
        </div>
        <div>
            <p>Description: {props.desc}</p>
        </div>
        <div className="btns">
        <button onClick={addtocart}>Add to Cart</button>
        <button id="plus" onClick={addtocart}>+</button>
        </div>
      </div>
    </>)
  
  }
  export default Card;