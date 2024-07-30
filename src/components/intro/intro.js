import React from 'react';
import './intro.css';
import background from "../../assets/background.png";
import {Link} from 'react-scroll';
import btnImg from '../../assets/download2.png';
import Typing from 'react-typing-effect';
import resume from '../../assets/PayalMoortiPDF .pdf';

const Intro=()=>{
    
    return(
        <section id ="intro">
         <div className="introContent">
        <span className="hello">Hello, </span>
        <span className="introText">I'm <span className="introname">
        <Typing text={['Payal']} speed={200} eraseDelay={3000}/>
        </span> <br/>Computer Science Student</span>
        <p className="introPara"> I am a computer science student eager to gain hands on experience!</p>
        <a 
      href={resume} 
      download 
      style={{ 
        display: 'inline-block',
        textDecoration: 'none'
      }}
    >    
        <button className="btn" >
        <img src={btnImg} height={10} width={10} alt="" className='btnImg'/>
        Resume
        </button>
        </a>
        </div>
        <img src={background} alt="profile" className="bg"/>
        </section>
    )
}
export default Intro;
