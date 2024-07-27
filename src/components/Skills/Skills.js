import './skills.css'
import css from "../../assets/css.png";
import html from "../../assets/html.png";
import js from "../../assets/js.png";
import react from "../../assets/react.png";
import wp from "../../assets/wp.png";
import canva from "../../assets/canva.png"


const Skills = () =>{
    return(
        <section id='skillsPage'>
        <div className='tech'>
            <h1 className='techTitle'>Technologies</h1>
            
            
            <div className='techImgs'>
                <img src={js} alt='' className='techImg' />
                <img src={html} alt='' className='techImg' />
                <img src={react} alt='' className='techImg' />
                <img src={wp} alt='' className='techImg' />
                <img src={css} alt='' className='techImg' />
                <img src={canva} alt='' className='techImg' />

            </div>

        </div>
    </section>
    )
}

export default Skills