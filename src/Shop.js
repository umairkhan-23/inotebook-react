import React from 'react'
import { useDispatch } from 'react-redux'
 import { bindActionCreators } from 'redux';
import {actioncreater}   from './state/index' 
import { useSelector } from 'react-redux'



function Shop() {
  const dispatch = useDispatch();
  const balance = useSelector(state=>state.amount)

  const {withdrawMoney,depositeMoney}=bindActionCreators(actioncreater,dispatch);

  return (
    <div>
       <div>
        <h2>Deposite/withdraw money</h2>
      <button className="btn btn-primary mx-2" onClick={()=>{withdrawMoney(100)}}  >-</button>
          ADD to cart({balance})
      <button className="btn btn-primary mx-2 " onClick={()=>{depositeMoney(100)}} >+</button>

    </div>
      
    </div>
  )
}

export default Shop;
