class Post {
    constructor(title,text) {
        this.title = title;
        this.text = text;
    }

    render() {
        const containerPost = document.createElement('div');
        containerPost.classList.add('post');

        containerPost.innerHTML = `<h1>${this.title}</h1>
                                  <p>${this.text}</p`

        return containerPost;
    }
}

export { Post }