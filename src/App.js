import { Header } from './Header.js';
import { Home } from './Home.js';
import { Projects } from './Projects.js';
import { About } from './About.js';
import { Resume } from './Resume.js';
import { Travel } from './Travel.js';
import { Footer } from './Footer.js';

class App {
    constructor(appDOM) {
        this.appDOM = appDOM;
        this.pageContent = document.createElement('div');
    }

    navigationEvent() {
        const links = document.querySelectorAll('header  a');
        console.log(links);
        links.forEach(link => link.addEventListener('click', (event) => {
            this.renderPage(event.target.hash);
        }))
    }

    renderPage(hash) {
        this.pageContent.innerHTML = "";
        switch (hash) {
            case '#home': {
                const home = new Home(this.pageContent);
                home.render();
                break;
            }
            case '#projects': {
                const projects = new Projects(this.pageContent);
                projects.render();
                break;
            }
            case '#about': {
                const about = new About(this.pageContent);
                about.render();
                break;
            }
            case '#resume': {
                const resume = new Resume(this.pageContent);
                resume.render();
                break;
            }
            case '#travel': {
                const travel = new Travel(this.pageContent);
                travel.render();
            }
        }
    }


    render() {
        const header = new Header(this.appDOM);
        header.render();

        this.navigationEvent();
        this.pageContent.classList.add('pages');
        this.appDOM.appendChild(this.pageContent);
        this.renderPage(window.location.hash);

        const footer = new Footer(this.appDOM);
        footer.render();
    }
}

export { App }