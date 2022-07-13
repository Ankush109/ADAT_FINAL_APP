
import React from 'react'
import { useAlert } from "react-alert"
import { useNavigate } from 'react-router-dom'
import { useSelector, useDispatch } from "react-redux"
import axios from "axios"
import "./order.css"
import { createorder, clearerrors } from '../actions/orderaction'
const Paymentop = () => {


  const orderInfo = JSON.parse(sessionStorage.getItem("orderInfo"))
  const shippinginfo = JSON.parse(localStorage.getItem("shippinginfo"))
  const cartitems = JSON.parse(localStorage.getItem("cartitems"))
  const { user } = useSelector((state) => state.user)

  const dispatch = useDispatch()
  const alert = useAlert()
  console.log(shippinginfo);
  const order = {
    shippinginfo:shippinginfo,
    orderitems: cartitems,
    itemsprice: orderInfo.subtotal,
    shippingprice: orderInfo.shippingCharges,
    totalprice: orderInfo.totalPrice
  }
  const placeorder = () => {
    dispatch(createorder(order))
    alert.success("order placed")
  }

  return (
    <div className='order'>

      <div>
        <h2 className='op'> Online payment is not yet availabe kindy gpay the owner to get the product</h2>
      </div>
      <div>
        <h3 className='op1'> Click the button below to place the order </h3>
      </div>

      <div>
     <h4 className='op2'> Gpay/phonepe / paytm at 933011808</h4>
      <h4 className='op2'>Upi id - 9330311808@upi</h4>
      <h4 className='op2'>For customised products, dm your products on Instagram - careadat Or dm us at 9088944168 ( whatsApp)</h4>
      </div>
   
        <div>
        <button className='o' onClick={placeorder}>
          place order
        </button>
        </div>
      </div>
      )
}

      export default Paymentop