import './intro.css';
import { MdWork } from "react-icons/md";

const Intro = () => {
    return(
        <section id="intro">
        <div className="introContent">
            <span className="hello">Hello,</span>
            <span className="introText">I'm <span className="introName">Julius</span> <br /> <span className="introJ">Aspiring Front-end Developer</span></span>
            <p className="introPara"> I'm a graduating student and a career shifter,<br /> that is dreaming to be a Web Developer.</p>
        
            <button className="btn"> <MdWork className="workicon" /> Hire Me</button>
        </div>
        <img src="#" alt="Profile" className="bg" />
    </section>
    )
}

export default Intro