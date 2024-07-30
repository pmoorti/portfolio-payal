import React from 'react';
import './projects.css';

const project =[
{
    id: 1,
    title: "Website Data Model Analysis and Database Design",
    description:[ "Analyzed a website's data model and created an ERD to represent its entities, attributes, and relationships ",
    "Transformed the ERD into a set of normalized database tables, and created SQL queries to interact with the designed tables, simulating real-world database operations for a company."],
    date: "May 2024"
  },
  {
    id: 2,
    title: "Vivid Voice",
    description: "Developed a full-stack web application in a team of three  leveraging open-source large language models like Google Gemma and Assembly AI to generate social media content from audio files, saving hundreds of hours of manual work in creating posts.",
    date: "March 2024"
  },
  {
    id: 3,
    title: "Video Sharing Platform",
    description: "Created a functional video sharing website demonstrating proficiency in web development principles, including front-end development (HTML, CSS, JavaScript), framework usage (Bootstrap), and API integration. Utilized DOM manipulation techniques to modify web page content and enhance user interaction in real-time. ",
    date: "April 2024"
  },
  {
    id: 4,
    title: "Amazon Data Analysis",
    description: "Conducted an analysis of Amazon orders spanning a decade leveraging Python to extract insightful data and visualized spending habits including tax expenditures through bar graphs using Pandas and Matplotlib.",
    date: "October 2023"
  }

  // Add more projects...
];
const Projects = ()=> {
    return(
    <section id='projects'>
        <span className='projectsTitle'>Projects</span>
        <div className="timeline">
        {project.map((project, index) => (
          <div 
            className={`timeline-item ${index % 2 === 0 ? 'left' : 'right'}`} 
            key={project.id}
          >
            <div className="timeline-content">
              <h3>{project.title}</h3>
              <div className='projDescrip'>
              <p>{project.description}</p>
              </div>
              <span className="date">{project.date}</span>
            </div>
          </div>
        ))}
      </div>
    </section>
    )
}
export default Projects;