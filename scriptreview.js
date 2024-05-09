// Dummy array to store blogs (example)
let blogs = [];

// Function to display blogs
function displayBlogs() {
    const blogList = document.getElementById('blogList');
    blogList.innerHTML = ''; // Clear previous content

    // Loop through each blog and create HTML elements to display them
    blogs.forEach(blog => {
        const blogItem = document.createElement('div');
        blogItem.classList.add('blog-item');
        blogItem.innerHTML = `
            <h3>${blog.title}</h3>
            <p>${blog.content}</p>
        `;
        blogList.appendChild(blogItem);
    });
}

// Call displayBlogs function to initially display blogs when the page loads
displayBlogs();
