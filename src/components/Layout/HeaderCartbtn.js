import React from 'react'
import CartIcon from '../Cart/CartIcon'
import classes from './HeaderCartbtn.module.css'
function HeaderCartbtn() {
  return (
    <button className={classes.button}>
        <span>
            <CartIcon />
        </span>
        <span> Your Cart</span>
        <span>
            3
        </span>
    </button>
  )
}

export default HeaderCartbtn
