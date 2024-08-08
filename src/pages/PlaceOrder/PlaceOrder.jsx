import React, {useContext} from 'react'
import './PlaceOrder.css'
import {StoreContext} from '../../context/StoreContext'
const PlaceOrder = () => {

    const {getTotalCartAmount} = useContext(StoreContext)

  return (
    <form className='place-order'>
      <div className="place-order-left">
        <p className="title">Delivery information</p>
        <div className="multi-fields">
          <input type="text" placeholder='Firstname'/>
          <input type="text" placeholder='Lastname'/>
        </div>
        <input type="email" placeholder='Email address'/>
        <input type="text" placeholder='Street'/>
        <div className="multi-fields">
          <input type="text" placeholder='City'/>
          <input type="text" placeholder='State'/>
        </div>
        <div className="multi-fields">
          <input type="text" placeholder='Zipcode'/>
          <input type="text" placeholder='Country'/>
        </div>
        <input type="text" placeholder="phone" />
      </div>
      <div className="place-order-right">
        <div className="cart-total">
          <h2>Cart Total</h2>
          <div>
          <div className="cart-total-details">
              <p>Subtotal</p>
              <p>₹ {getTotalCartAmount()}</p>
            </div>
            <div className="cart-total-details">
              <p>Delivery fee</p>
              <p>₹ {getTotalCartAmount()===0 ? 0 : 2}</p>
            </div>
            <div className="cart-total-details">
              <b>Total</b>
              <b>₹ {getTotalCartAmount()>0 ? getTotalCartAmount() +2 : getTotalCartAmount()}</b>
            </div>
          </div>
          <button >PROCEED TO PAYMENT</button>
        </div>
      </div>

    </form>
  )
}

export default PlaceOrder