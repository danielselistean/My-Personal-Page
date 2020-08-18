
class Footer {
    constructor(appDOM) {
        this.appDOM = appDOM;
    }

    render() {
        const footer = document.createElement('footer');
        footer.innerHTML = `<div class = 'footer'>
                                <div class = 'contact'>
                                    <p> Vasile-Daniel Selistean </p>
                                    <p> Email: daniel.selistean@yahoo.com </p>
                                    <p> Mobile: 0756 893 655 </p>
                                </div>

                                <div class = 'social'>
                                        
                                    <div class = 'social-titles'>
                                        <a href="https://www.facebook.com/daniel.selistean.7">Facebook</a>
                                        <a href="https://linkedin.com/in/daniel-selistean-576650199">LinkedIn</a>
                                        <a href="https://github.com/danielselistean">GitHub</a>
                                    </div>

                                    <div class = 'social-icons'>
                                
                                        <div><a href="https://www.facebook.com/daniel.selistean.7"><i class="fab fa-facebook"></i></a></div>

                                        <div><a href="https://linkedin.com/in/daniel-selistean-576650199"><i class="fab fa-linkedin"></i></a></div>
                                    
                                        <div><a href="https://github.com/danielselistean"><i class="fab fa-github"></i></a></div>

                                    </div>
                                </div>
                            
                            </div>`;

        this.appDOM.appendChild(footer);
    }
}

export { Footer }
