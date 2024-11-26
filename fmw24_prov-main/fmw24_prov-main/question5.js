// 5. Responsive Posts (3p)
// Ladda ner posts från denna url: https://jsonplaceholder.typicode.com/posts
// För varje post ska title och body placeras under varandra.
// I desktop-vy ska posts visas i 3 kolumner.
// I mobil-vy ska posts visas i en kolumn med 100% width.

async function fetchPosts() {
    try {
      const response = await fetch('https://jsonplaceholder.typicode.com/posts');
      const posts = await response.json();
      renderPosts(posts);
    } catch (error) {
      console.error('Error fetching posts:', error);
    }
  }
  
  function renderPosts(posts) {
    const postContainer = document.getElementById('post-container');
    postContainer.innerHTML = ''; 
  
    posts.forEach(post => {
      const postElement = document.createElement('div');
      postElement.classList.add('post');
      postElement.innerHTML = `
        <h3>${post.title}</h3>
        <p>${post.body}</p>
      `;
      postContainer.appendChild(postElement);
    });
  }
  
  fetchPosts();