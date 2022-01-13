import React from 'react'
import styleDiet from './CSS/styleDiet.css'
import vegDiet from "./images/vegDiet.jpg";
import nonvegDiet from "./images/nonvegDiet.jpg";
import vegDiet1 from "./images/vegDiet1.jpg";
export default function Diet() {
    return (
        <div>
            <div id="pricing-container">
  
   <div className="pricing-card business">
  <h3 className="dietCard1">Vegetarian Diet</h3>
  <img className="Diet" src={vegDiet1}/>
  {/* <p className="dietCard1">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p> */}
     
    
    <a href="/diet_veg" className="button">Read More</a>
  </div>
  
   <div className="pricing-card enterprise">
  <h3 className="dietCard2">Non-Vegetarian Diet</h3>
  <img className="Diet" src={nonvegDiet}/>
  {/* <p className="dietCard2">"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p> */}
     
    
    <a href="/diet_nonveg" className="button">Read More</a>
  </div>
  

</div>
        </div>
    )
}
