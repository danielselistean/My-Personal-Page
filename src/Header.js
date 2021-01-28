class Header {
    constructor(appDOM){
        this.appDOM = appDOM;
    }
    handleClick() {
        document.getElementById('pagesLinks').classList.toggle('show');
    }
    
    render(){
        const header = document.createElement('header');
        header.innerHTML = `<div class = 'header'>
                                <div class = 'signature'>
                                    <img src ='./src/Pictures/mypicture.jpg' alt = 'my picture' />
                                    <a href="./index.html#home" class="signatureBtn">Daniel Selistean</a>
                                </div>
                                <button  class= 'hamburger' id= 'hamburger' onclick=${this.handleClick}>
                                    <i class= 'fas fa-bars'></i>
                                </button>
                                <div class = 'pagesLinks' id= 'pagesLinks' >
                                    
                                    <a href="./index.html#resume" class="resumeBtn">Resume</a>
                                    <a href="./index.html#projects" class="projectsBtn">Projects</a>
                                    <a href="./index.html#about" class="aboutBtn">About</a>
                                    <a href="./index.html#travel" class="travelBtn">Travel</a>
                                  
                                </div>
                            </div>`;

        this.appDOM.appendChild(header);
    }
}

export {Header}