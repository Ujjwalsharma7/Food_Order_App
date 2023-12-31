import React from 'react'
import classes from './MealItemform.module.css'
import Input from '../../UI/input'
function MealItemform(props) {
  return (
   <form className={classes.form}>
<Input label="Amount" input = {{
  id: 'amount_' + props.id,
  type: 'number',
  min: '1',
  max: '5',
  step: '1',
  defaultValue: '1'
}}/>
    <button>
        + Add
    </button>
   </form>
  )
}

export default MealItemform
