import './Navbar.css';
import { Link } from 'react-scroll';
import { IoMdCall } from "react-icons/io";

const Navbar = () => {
    return(
        <nav className="navbar">
            
            <div className="desktopMenu">
                <Link activeClass="active" to="intro" spy={true} smooth={true} offset={-100} duration={500} className="desktopMenuListItem">Home</Link>
                <Link activeClass="active" to="experience" spy={true} smooth={true} offset={-50} duration={500} className="desktopMenuListItem" >Experience</Link>
                <Link activeClass="active" to="education" spy={true} smooth={true} offset={-100} duration={500}className="desktopMenuListItem">Education</Link>
                <Link activeClass="active" to="skillsPage" spy={true} smooth={true} offset={-100} duration={500} className="desktopMenuListItem">Technologies</Link>
            </div>

            


            <button className="desktopMenuBtn" onClick={() => {
                document.getElementById('contactPage').scrollIntoView({behavior:'smooth'});
            }}>
            <IoMdCall className="destopMenuImg"/> Contact Me </button>
        </nav>
    )
}

export default Navbar