function getPostHTML(post) {
    return `
        <div class="post">
            <h2 class="post-title">${post.title}</h2>
            <p class="post-body">${post.body}</p>
        </div>
    `;
}

function appendPost(container, postHTML) {
    container.innerHTML += postHTML;
}

function loadPosts() {
    const postsContainer = document.getElementById('posts-container');

    fetch('https://jsonplaceholder.typicode.com/posts')
        .then(response => response.json())
        .then(posts => {
            posts.forEach(post => {
                const postHTML = getPostHTML(post);
                appendPost(postsContainer, postHTML);
            });
        })
        .catch(error => console.error('Error fetching posts:', error));
}

window.addEventListener('DOMContentLoaded', loadPosts);
