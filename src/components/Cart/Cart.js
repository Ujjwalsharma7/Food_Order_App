import React from 'react'
import classes from './Cart.module.css'
function Cart(props) {
    const cartItems = (
        <ul>
            {[{id:'c1', name:'sushi', amount: 2, price: 12.99}].map((item) => (
                <li>{item.name}</li>
            ))}
        </ul>
    )
  return (
    <div>
    {cartItems}
      <div className={classes.total}>
        <span>Total Amount</span>
        <span>35.62</span>
      </div>
      <div className={classes.actions}>
        <button className={classes['buitton--alt']}>Close</button>
        <button className={classes.button}>Order</button>
      </div>
     
    </div>
  )
}

export default Cart