import React from 'react'
import classes from './MealSummary.module.css'
function MealSummary() {
  return (
   <section className={classes.summary}>
    <h2>Delicious Food Delivered To You</h2>
    <p>
        Choose your fav meal from our broad selection of available meals and enjoy a delicious lunch or dinner at home.
    </p>
    <p>
        All our meals are cooked with high quality ingredients, just-in-time and of course by the best chefs!
    </p>
   </section>
  )
}

export default MealSummary