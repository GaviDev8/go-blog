// Get blog posts from localStorage
let posts = localStorage.getItem('posts');
if (posts) {
    posts = JSON.parse(posts);
} else {
    posts = [];
}

// Display blog posts
const postsSection = document.querySelector('#posts-section');

posts.forEach(post => {
    const postElement = document.createElement('div');
    postElement.classList.add('post');

    const titleElement = document.createElement('h2');
    titleElement.textContent = post.title;

    const contentElement = document.createElement('p');
    contentElement.textContent = post.content;

    const authorElement = document.createElement('p');
    authorElement.textContent = `By: ${post.username}`;

    postElement.appendChild(titleElement);
    postElement.appendChild(contentElement);
    postElement.appendChild(authorElement);

    postsSection.appendChild(postElement);
});
