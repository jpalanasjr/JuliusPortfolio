import React from "react";
import "./education.css";
import sti from "../../assets/sti.png";
import rcc from "../../assets/rcc.png";
import ldcu from "../../assets/ldcu.png";

const Education = () => {
  return (
    <section id="education">
      <span className="skillTitle">Education</span>
     
      <div className="skillBars">
        <div className="skillBar">
          <img src={sti} className="skillBarImg" alt="css" />
          <div className="skillBarText">
          <h2>STI Munoz Edsa</h2>
          <p>Graduating student</p>
          </div>
        </div>
        <div className="skillBar">
          <img src={rcc} className="skillBarImg" alt="html" />
          <div className="skillBarText">
          <h2>FEU Roosevelt</h2>
          <p>Graduated Highschool</p>
          </div>
        </div>
        <div className="skillBar">
          <img src={ldcu} className="skillBarImg" alt="js" />
          <div className="skillBarText">
          <h2>Liceo de Cagayan University</h2>
          <p>Graduated Gradeschool</p>
          </div>
        </div>
        
        </div>
        
    </section>
  );
};

export default Education;
