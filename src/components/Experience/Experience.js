import React from 'react';
import './experience.css'
import unisys from "../../assets/unisys1.png";
import Tyler from "../../assets/tyler.png";
import wp from "../../assets/wp.png"

const Experience = () =>{
    return(
    <div> 
            <section id="experience">
            <span className="expTitle">Experience</span>
        
      <div className="expBars">
             <div className="expBar">
                 <img src={Tyler} className="expBarImg" alt="css" />
                 <div className="skillBarText">
                    <h2>Tyler Technologies</h2> 
                     <p>Software Suport</p><br />
                     <p>Supporting clients with the functionality of the software and providing trouble shooting. 
                        This includes documenting Bug reports that will be sent to Development.
                     </p>
                </div>
            </div>
            <div className="expBar">
                 <img src={unisys} className="expBarImg" alt="css" />
                 <div className="expBarText">
                    <h2>Unisys</h2>
                     <p>IT Service Desk  (Omnicom Media group)</p> <br />
                    <p>Providing Technical support when it comes to Hardware and support. This includes installation/maintenance. </p>
                </div>
            </div>
            <div className="expBar">
                 <img src={wp} className="expBarImg" alt="css" />
                 <div className="expBarText">
                    <h2>Personal</h2>
                     <p>WordPress Maintenance (Part-Time)</p> <br />
                    <p>Maintaining a WordPress website, doing update and changing UI depending on the client's needs.</p>
                </div>
            </div>

     </div>
     </section>
     </div>
       
    )
    }

    export default Experience