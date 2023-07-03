import React from 'react'
import mealsImage from '../../assets/meals.jpg'
function Header() {
  return (
   <React.Fragment>
    <header>
        <h1>UjjuMeals</h1>
        <button>Cart</button>
    </header>
    <div>
        <img src={mealsImage} alt='A table full of delicious food' />
    </div>
   </React.Fragment>
  )
}

export default Header
