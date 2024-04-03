// Get form element
const form = document.querySelector('form');

// Event listener for form submission
form.addEventListener('submit', function(event) {
    event.preventDefault();

    // Get form input values
    const username = document.querySelector('#username').value.trim();
    const title = document.querySelector('#title').value.trim();
    const content = document.querySelector('#content').value.trim();

    // Validate form inputs
    if (!username || !title || !content) {
        alert("Please complete all fields.");
        return;
    }

    // Store blog post data to localStorage
    const post = {
        username: username,
        title: title,
        content: content,
    };

    let posts = localStorage.getItem('posts');
    if (posts) {
        posts = JSON.parse(posts);
    } else {
        posts = [];
    }

    posts.push(post);
    localStorage.setItem('posts', JSON.stringify(posts));

    // Redirect to posts page
    window.location.href = 'blog.html';
});
