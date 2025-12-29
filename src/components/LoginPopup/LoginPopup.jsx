import React, { useState } from 'react'
import './LoginPopup.css'
import { assets } from '../../assets/assets'

const LoginPopup = ({ setShowLogin }) => {

  const [currState, setCurrState] = useState("Login")

  return (
    <div className='login-popup'>
      <form className="login-popup-container">
        <div className="login-popup-title">
          <h2>{currState}</h2>
          <img
            onClick={() => setShowLogin(false) } src={assets.cross_icon}alt="" />
        </div>
        <div className="login-popup-inputs">
          {currState==="Login"?<></>:<input type="text" placeholder='Your name' required />}
      
          <input type="text"  placeholder='Your email' required/>
          <input type="text" placeholder='Password' required/>
        </div>
        <button>{currState === "Sign Up"?"Create account":"Login"}</button>
        <div className="login-popup-condition">
          <input type="checkbox" required />
          <p>By continuting, i agree to the terms of use & privacy policy</p>
        </div>
        {currState==="Login"
        ? <p>Create a new account? <span onClick={()=>setCurrState("Sign Up")} >Click here</span></p>
      :   <p>Already have an account? <span  onClick={()=>setCurrState("Login")}>Login here</span></p>
      }
     
      </form>
    </div>
  )
}

export default LoginPopup


// import React, { useContext } from 'react'
// import './Placeorder.css'
// import { StoreContext } from '../../Context/StoreContext'

// const Placeorder = () => {
// const {getTotalCartAmount} = useContext(StoreContext)

//   return (
//     <form className='place-order'>
//       <div className='place-order-left'>
//         <p className="title">Delivery Information</p>
//         <div className="multi-fields">
//           <input type="text" placeholder='First name' />
//           <input type="text" placeholder='Last name'/>
//         </div>
//         <input type="text" placeholder='Email address' />
//         <input type="text" placeholder='Street'/>
        
//         <div className="multi-fields">
//           <input type="text" placeholder='City' />
//           <input type="text" placeholder='State' />
          
//             <input type="text" placeholder='Zip code' />
//             <input type="text" placeholder='Country' />
          
//           <input type="text" placeholder='Phone' />
//         </div>

//       </div>
//       <div className="place-order-right">
//         <div className="cart-total">
//           <h2>Cart Total</h2>
//           <div>
//                  <div className="cart-total-details">
//               <p>Subtotal</p>
//               <p>${getTotalCartAmount()}</p>
//             </div>
//             <hr />
//             <div className="cart-total-details">
//               <p>Delivery Free</p>
//               <p>${getTotalCartAmount()===0?0:2}</p>
//             </div>
//             <hr />
//             <div className="cart-total-details">
//               <b>Total</b>
//               <b>${getTotalCartAmount()===0?0:getTotalCartAmount()+2}</b>
//             </div>
//           </div>
//            <button>PROCEED TO PAYMENT</button>
//         </div>

//       </div>


//     </form>
//   )
// }

// export default Placeorder