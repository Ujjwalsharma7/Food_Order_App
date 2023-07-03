import React, { Fragment } from 'react'

import MealSummary from './MealSummary'
import Availablemeals from './Availablemeals'
function Meals() {
  return (
    <Fragment>
        <MealSummary />
        <Availablemeals />
    </Fragment>
  )
}

export default Meals
