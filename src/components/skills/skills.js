import React from 'react';
import './skills.css';
import java from '../../assets/java.png';
import python from '../../assets/python.png';
import sql from '../../assets/sql.png';
import html from '../../assets/html.png';
import css from '../../assets/css.png';
import js from '../../assets/js.png';
import excel from '../../assets/excel.png';
import mysql from '../../assets/mysql.png';
import react from '../../assets/physics.png'
import pandas from '../../assets/Pandas.png';
import matplotlib from '../../assets/Matplotlib.png';


const Skills = ()=>{
    return(
        <section id='skills'>
            <span className = "skillTitle">Skills</span>
            <span className="sectionTitle">Programming Languages</span>
            <div className="skillBars">
            <div className="skillBar">
                <img src={java} height={60} width={60} alt="Java" className="skillBarImg"/>
                <div className="skillBarText">
                    <h2>
                        Java     
                    </h2>
                </div>
            </div>
            <div className="skillBar">
                <img src={sql}alt="SQL" height={60} width={60} className="skillBarImg"/>
                <div className="skillBarText">
                    <h2> 
                        SQL    
                    </h2>
                </div>

            </div>
            <div className="skillBar">
                <img src={python}alt="Python" height={60} width={60} className="skillBarImg"/>
                <div className="skillBarText">
                    <h2> 
                        Python    
                    </h2>
                </div>

            </div>
            <div className="skillBar">
                <img src={html}alt="HTML" height={60} width={60} className="skillBarImg"/>
                <div className="skillBarText">
                    <h2> 
                        HTML    
                    </h2>
                </div>

            </div>
            <div className="skillBar">
                <img src={css}alt="CSS"height={60} width={60} className="skillBarImg"/>
                <div className="skillBarText">
                    <h2> 
                        CSS    
                    </h2>
                </div>

            </div>
            <div className="skillBar">
                <img src={js}alt="JS" className="skillBarImg"/>
                <div className="skillBarText">
                    <h2>  
                        Javascript   
                    </h2>
                </div>
            </div>
            </div>

            <span className="sectionTitle">Technologies</span>
            <div className="skillBars">
            <div className="skillBar">
                <img src={react} height={60} width={60} alt="React" className="skillBarImg"/>
                <div className="skillBarText">
                    <h2>
                        React    
                    </h2>
                </div>
            </div>
            <div className="skillBar">
                <img src={mysql}alt="MySQL" height={60} width={60} className="skillBarImg"/>
                <div className="skillBarText">
                    <h2> 
                        MySQL   
                    </h2>
                </div>

            </div>
            <div className="skillBar">
                <img src={excel}alt="Excel" height={60} width={60} className="skillBarImg"/>
                <div className="skillBarText">
                    <h2> 
                        Microsoft Excel    
                    </h2>
                </div>

            </div>
            <div className="skillBar">
                <img src={pandas}alt="Pandas" height={60} width={60} className="skillBarImg"/>
                <div className="skillBarText">
                    <h2> 
                        Pandas
                    </h2>
                </div>

            </div>
            <div className="skillBar">
                <img src={matplotlib}alt="Matplotlib" height={60} width={60} className="skillBarImg"/>
                <div className="skillBarText">
                    <h2> 
                        Matplotlib   
                    </h2>
                </div>

            </div>
            </div>
        </section>
    )
}
export default Skills;