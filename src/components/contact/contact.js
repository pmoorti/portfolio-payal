import React, {useRef} from 'react';
import './contact.css';
import github from '../../assets/github-mark.png';
import linkedin from '../../assets/linked.png';
import emailjs from 'emailjs-com';


const Contact =()=>{
    const form = useRef();
    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_x3d48aw', 'template_ir69anu', form.current, 'pM_xY1WmZHOmcc--I')
            .then((result) => {
                console.log(result.text);
                e.target.reset();
                alert('Message Sent Successfully');
            }, (error) => {
                console.log(error.text);
                alert('An error occurred, please try again');
            });
    };
    return(
        <section id="contactPage">
         <span className = "contactTitle">Contact Me</span>
            <div id='contact'>
                <form className = "contactForm" ref={form} onSubmit={sendEmail}> 
                <input type="text" className="name" placeholder="Your Name" name="your_name"/>
                <input type="text" className="email" placeholder="Your Email" name="your_email"/>
                <textarea type="text" name ="message" className="msg" placeholder="Your Message" rows="5"/>
                <button className='submitBtn' type='submit' value='Send'>Submit</button>
                </form>
                <div className="links">
                <a href="https://github.com/pmoorti" target="_blank" rel="noopener noreferrer">
                <img src={github} alt="github" className="link" height={40} width={40}/>
                </a>
                <a href="https://www.linkedin.com/in/payal-moorti/" target="_blank" rel="noopener noreferrer">
                <img src={linkedin} alt="linkedin" className="link" height={40} width={50}/>
                </a>
                </div>
            </div>
        </section>
    );
}
export default Contact