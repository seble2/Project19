import React from 'react'
import '../Footer/Style.css'
import { BrowserRouter, Route, Link } from "react-router-dom";

const Footer =()=>{
     return (
      <div>     
        <footer class="page-footer" id="bg">
        <div class="container">
          <div class="row">
          <div class="col">
              
          <div class="col">
                <h6 class="white-text">CUSTOMERSERVICE</h6>
                <ul> 
                  
                  <li class=""><Link to="/Contact As">Contact Us</Link></li>
                  <li class=""><Link to="/Shipping Information">Shipping Information</Link></li>
                  <li class=""><Link to="/Retuns & Excahnge">Retuns & Excahnge</Link></li>
                  <li class=""><Link to="/FAQ'S">FAQ'S</Link></li>
                  
                </ul>
              </div>
            

              <div class="col">
                <h6 class="white-text">MY ACCOUNT</h6>
                <ul> 
                  <li class=""><Link to="/Sing In">Sing In</Link></li>
                  <li class=""><Link to="/Registrer">Registrer</Link></li>
                  <li class=""><Link to="/Order Status">Order Status</Link></li>
                  <li class=""><Link to="/Shoping Cart">Shoping Cart</Link></li>
                  
                </ul>
              </div>
              </div>
          <div class="col">
                <h6 class="white-text">RESOURCE</h6>
                <ul> 
                  
                  <li class=""><Link to="/Find Store">Find Store</Link></li>
                  <li class=""><Link to="/Stores">Stores</Link></li>
                  
                  
                </ul>
              </div>
            
          
              <div class="col">
                <h6 class="white-text">POPULAR LINK</h6>
                <ul> 
                  
                  <li class=""><Link to="/BEST SELLERS">BEST SELLERS</Link></li>
                  <li class=""><Link to="/TOP REATED">TOP REATED</Link></li>
                  <li class=""><Link to="/NEW ARRIVALS">NEW ARRIVALS</Link></li>
                  <li class=""><Link to="/WORK">WORK</Link></li>
                  <li class=""><Link to="/SIZE CHART">SIZE CHART</Link></li>
                  
                </ul>
              </div>
              <div class="col">
              <h6 class="white-text">BECOME AN #EARTHMOVERS.</h6>
                <ul>
                <li>Leave your mark and receive our latest Styles, Perks and Promos.</li>
                  <li><Link to="Retuns & Excahnge">Sign UP Now</Link></li>
                </ul>
              </div>
              <div class="right">
           
              
          <div>       
            <input id="email-input" placeholder="Enter your email address"/>
            <p class="copyright-text">©️ 2018 CAT FOOTWEAR ALL RIGHTS RESERVED </p>
</div>
           
           <div class="footer">
           <ul>
           <li class=""><Link to="/pages/site-map">SITE MAP</Link></li>             
           <li class=""><Link to="/pages/privacy-policy">PRIVACY POLICE</Link></li>           
           <li class=""><Link to="/pages/term-condition">TERM OF USE</Link> </li>                
          
           </ul>
           </div>
         </div>
       </div>


</div>
         
           
         <div class="logo">
         <p><img src="https://cdn.shopify.com/s/files/1/0009/9555/7491/t/2/assets/CAT-191B-CLR-05.png?7162714265791386735"/> © 2021 Catfootwear PK. CATERPILLAR and related design marks are registered trademarks of Caterpillar, Inc. Cat Footwear is produced under <br/>license by Wolverine World Wide, Inc.</p>
          </div>
          
       </footer>
   </div>  
       )
   }

  
export default Footer

