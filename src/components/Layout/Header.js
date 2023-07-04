import React from 'react'
import mealsImage from '../../assets/meals.jpg'
import classes from './Header.module.css'
import HeaderCartbtn from './HeaderCartbtn'
function Header(props) {
  return (
   <React.Fragment>
    <header className={classes.header}>
        <h1>UjjuMeals</h1>
  <HeaderCartbtn onClick={props.onShowCart} />
    </header>
    <div className={classes['main-image']}>
        <img src={mealsImage} alt='A table full of delicious food' />
    </div>
   </React.Fragment>
  )
}

export default Header
