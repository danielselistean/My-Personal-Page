import {Post} from './Post.js';
import {posts} from '../Posts/posts.js';

class Posts {
    constructor(){

    }

    render(){
        console.log(posts);
        const postsContainer = document.createElement('div');
        postsContainer.classList.add('posts');

        const post= new Post();
        // post1.text = 'Hello from: Post, Posts on Whats page!';
        const postsDOM = posts.map(post => post.render());
        return postsDOM;
        // postsContainer.appendChild(postDOM);
        // return postsContainer;
    }
}

export {Posts}