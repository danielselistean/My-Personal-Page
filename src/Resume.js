class Resume {
    constructor(appDOM){
        this.appDOM = appDOM
    }

    render(){
        const resumeDOM = document.createElement('div');
        resumeDOM.classList.add('resume-page');
        resumeDOM.innerHTML = `     <div class = 'resume-title'>
                                        <h1>Curriculum Vitae</h1>
                                    </div>
                                    <div class = 'resume-link'>
                                        <a href = "https://resume.io/r/ue2ortOmE">Resume.io</a>
                                    </div>
                                    <div class = 'resume-text'>
                                        <h2>Vasile-Daniel Selistean</h2>
                                            <p>Address: str. Ion Mester nr. 5, Cluj-Napoca</p>
                                            <p>Email: daniel.selistean@yahoo.com</p>
                                            <p>Mobile: 0756 893 655</p></br>
                                        <h3>Career Profile</h3>
                                            <p> Hardworking , motived and organized person, with over 15 years work experience. </p></br>
                                        <h3>Skills and Abilities</h3>
                                            <ul>
                                                <li>Comunication Skills</li>
                                                <li>Good Team Player</li>
                                                <li>Effective Time Management</li>
                                                <li>Ability to Multitask</li>
                                                <li>Determination and Persistence</li>
                                            </ul></br>
                                        <h3>Professional Trainings</h3>
                                            <h4>Informal School of IT- Web development (JavaScript)</h4>
                                            <h6>February 2020 - August 2020</h6>
                                            <ul>
                                                <li><b>Web Concepts</b>: how the web works, client-server architecture,protocols;</li>
                                                <li><b>HTTP</b>: fundamentals about the protocol : methods, status codes, headers, cookies and sessions;</li>
                                                <li><b>HTML5</b> and <b>CSS3</b> : how to build responsive User Interface with semantic HTML elements;</li>
                                                <li><b>Javascript</b>: how to use variables, primitive types, functions , objects,hoisting, scope , DOM, AJAX, JSON, promises;</li>
                                                <li><b>OOP</b> in JavaScript: prototypes, classes and inheritance ;</li>
                                                <li><b>GIT</b>: principles and basic commands;</li>
                                                <li><b>REACT JS</b>: how modern application JS work, React components, props, state, JSX ;</li>
                                            </ul></br>
                                        <h3>Professional Experience</h3>
                                            <h4>Lead Cook, Golden Tulip Ana Dome, Cluj-Napoca</h4>
                                            <h6>October 2014 - March 2020</h6>
                                            <p>At the heart of being a lead cook is the ability to make food that others want to eat. In addition to culinary skills, in this role, I developed some others skills, like:</p>
                                            <ul>
                                                <li>Communicating Clearly: so that others in the kitchen understand expectations and exactly what to do.</li>
                                                <li>Focusing on Teamwork in order to maintain operational flow and workplace morale.</li>
                                                <li>Multitasking to perform various cooking and managing duties at the same time.</li>
                                                <li>Organized and Prioritized work to complete assignments in a timely, efficient manner.</li>
                                                <li>Worked with a strong attention to detail and a keen eye for process that need attention.</li>
                                                <li>Maintained a Clean and Organized working environment to enhance productivity.</li>
                                            </ul></br>
                                        <h3>Education</h3> 
                                            <h4>USAMV - Economic Engineer, Cluj-Napoca</h4>
                                            <h6>October 2001 - June 2004</h6>
                                            <h4>Colegiul Tehnic de Comunicatii "Augustin Maior" - Industrial Electronics and Communication Technology, Cluj-Napoca</h4>
                                            <h6>September 1997 - June 2001</h6></br>
                                        <h3>Languages</h3> 
                                            <ul>
                                                <li>Romanian - native</li>
                                                <li>English - medium</li>
                                                <li>Portuguese - medium</li>
                                            </ul> <br/>
                                        <h3>Hobby</h3> 
                                            <ul>
                                                <li>Nature trips - mountain, sea, thermal pools</li>
                                                <li>Cooking - mediterranean culinary is top favorite  </li>
                                                <li>Sport - especially Football and Kickboxing</li>
                                            </ul> <br/>
                                    </div>`;

        this.appDOM.appendChild(resumeDOM);
    }
}

export {Resume}