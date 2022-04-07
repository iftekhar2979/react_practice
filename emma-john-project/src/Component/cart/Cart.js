import React from 'react';

function Cart(props) {
const {cart}=props
let total=0;
let quantity=0;
let shipping=0;
for(const product of cart){
    quantity=quantity+product.quantity;
    total=total+product.price*product.quantity;
    shipping=shipping+product.shipping;
}
const tex=parseFloat((total*0.1).toFixed(2))
const grandTotal=total+shipping+tex

  return (
    <div>
        <h4>Order Summary</h4>
        <p>Selected Items: {quantity}</p>
            <p>Total price: ${total}</p>
            <p>Total Shipping: ${shipping}</p>
            <p>Tax: {tex}</p>
            <h5>Grand Total: {grandTotal.toFixed(2)}</h5>
    </div>
  )
}

export default Cart