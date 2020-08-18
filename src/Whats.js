import { Post } from './Classes/Post.js';
import {posts} from './Posts/posts.js';

class Whats {
    constructor(appDOM) {
        this.appDOM = appDOM;
        
    }

    renderPosts() {
        console.log(posts);

        const post= new Post();
        // post1.text = 'Hello from: Post, Posts on Whats page!';
        const postsDOM = posts.map(postDOM=> post.render());

        return postsDOM;
    }

    render() {
        const whatsDOM = document.createElement('div');
        whatsDOM.classList.add('whats-page');

        // whatsDOM.appendChild(postsDOM);
        this.renderPosts().then((postsDOM) => {
            postsDOM.forEach(postDOM => {
                whatsDOM.appendChild(postDOM)
            });
        });
        // this.whatsDOM.innerHTML = "Hello from Whats !!!"

        this.appDOM.appendChild(whatsDOM);
    }
}

export { Whats }