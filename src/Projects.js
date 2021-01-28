class Projects {
    constructor(appDOM) {
        this.appDOM = appDOM;
    }

    render() {
        const projectsDOM = document.createElement('div');
        projectsDOM.classList.add('projects-page');
        projectsDOM.innerHTML = ` <div class='projects'>
                                    
                <div class = 'appLinks first'>
                    <div>
                        <h3>Rock-Paper-Scissors Game</h3>   
                        <a href = "https://danielselistean.github.io/Rock-Paper-Scissors-Game/" >
                            <img class = 'rock-paper' src='./src/Pictures/rock-paper.jpg'>
                        </a>
                    </div>
                    <div>
                        <h3>SnakeGame</h3>   
                        <a href = "https://danielselistean.github.io/SnakeGame/" >
                            <img class = 'snakeGame' src='./src/Pictures/snakegame.jpg'>
                        </a>
                    </div>
                </div>

                <div class = 'appLinks'>
                    <div>
                        <h3>WeatherApp</h3>
                        <a href = "https://danielselistean.github.io/WheatherApi-Project/" >
                            <img class = 'weatherApp' src='./src/Pictures/WeatherApi.jpg'>
                        </a>
                    </div>
        
                    <div>
                        <h3>Batman-IMDB</h3>   
                        <a href = "https://danielselistean.github.io/BatIMDB/" >
                            <img class = 'batimdb' src='./src/Pictures/batman-movies.jpg'>
                        </a>
                    </div>
                </div>
        </div>`
        
        this.appDOM.appendChild(projectsDOM);
    }
}

export { Projects }