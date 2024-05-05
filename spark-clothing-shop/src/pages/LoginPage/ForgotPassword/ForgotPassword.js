import React from "react";
import { Link } from "react-router-dom";
const ForgotPassword = () => {

  return(
    <div>
    <section className="vh-100">
       <div className="container-fluid h-custom">
         <div className="row d-flex justify-content-center align-items-center h-100">
          
           <div className="col-md-8 col-lg-6 col-xl-4 offset-xl-1">
           <div class="card" style={{borderRadius: 15}}>
            <div class="card-body p-5 p-md-5">
             <form>
               
               {/* Email input */}
               <div className="form-outline mb-4">
                 <input type="email" id="form3Example3" className="form-control form-control-lg" placeholder="Enter a valid email address" />
                 <label className="form-label" htmlFor="form3Example3">Email address</label>
               </div>
              
               <div className="text-center text-lg-start mt-4 pt-2">
                 <button type="button" className="btn btn-primary btn-lg" style={{paddingLeft: '2.5rem', paddingRight: '2.5rem'}}>Get OTP</button>
                 
               </div>
             </form>
             </div>
             </div>
           </div>
         </div>
       </div>
       
     </section>
</div>
  )
}

export default ForgotPassword;