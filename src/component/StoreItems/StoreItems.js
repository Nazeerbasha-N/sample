import { Card } from "react-bootstrap";
import PropTypes from "prop-types";
import { Formatcurrency } from "../../utilities/formatcurrency/Formatcurrency";
import { Button } from "react-bootstrap";
import { useShoppingCart } from "../context/ShoppingCartContext";
// import { useState } from "react";

// const quantity = 1;
function StoreItems({ id, name, price, imgUrl }) {
  const {
    getItemQuantity, 
    increaseCartQuantity, 
    decreaseCartQuantity, 
    removeFromCart
  } = useShoppingCart()

 
  const quantity = getItemQuantity(id);
  //  const [isButtonDisabled, setButtonDisabled] = useState(false);

  // quantity === 1 ? setButtonDisabled(false): setButtonDisabled(true)
  let isButtonDisabled = false

  if(quantity === 1){
      isButtonDisabled = true
  }else{
      isButtonDisabled = false
  }



  console.log(quantity)
  return (
    <Card className='h-100'>
      <Card.Img
        variant="top"
        src={imgUrl}
        height="200px"
        style={{
          objectFit: "cover",
        }}
      />
      <Card.Body className="d-flex flex-column">
        <Card.Title className="d-flex justify-content-between align-items-baseline mb-4">
          <span className="fs-2">{name}</span>
          <span className="ms-2 text-muted">{Formatcurrency(price)}</span>
        </Card.Title>
      </Card.Body>
   
      <div className="mb-4">
     
        {quantity === 0 ? (
          <Button className="w-100" onClick={()=> increaseCartQuantity(id)}>+ Add to Cart</Button>
        ) : 
          <div
            className="d-flex align-items-center flex-column"
            style={{ gap: ".5rem" }}>
            <div
              className="d-flex align-items-center justify-content-center "
              style={{ gap: ".5rem" }}>
              <Button className='' disabled={isButtonDisabled} onClick={()=> decreaseCartQuantity(id)}>-</Button>
              <div>
                <span className="fs-3">{quantity}</span>in cart
              </div>
              <Button onClick={()=> increaseCartQuantity(id)} >+</Button>
            </div>
            <Button variant="danger" size="ms"  onClick={()=> removeFromCart(id)}>
              Remove
            </Button>
          </div>
        }
      </div>
    </Card>
  );
}

StoreItems.prototype = {
  id: PropTypes.number,
  name: PropTypes.string,
  price: PropTypes.number,
  imgUrl: PropTypes.string,
};

export default StoreItems;
