// script.js

document.addEventListener("DOMContentLoaded", function () {
    const articles = [
        {
            title: "Latest Tech Innovations on Campus",
            image: "https://via.placeholder.com/400x200.png?text=Tech+Event",
            category: "tech",
            content: "Our campus hosted a seminar on AI and robotics featuring industry experts.",
            comments: []
        },
        {
            title: "Student Life: Balancing Studies and Fun",
            image: "https://via.placeholder.com/400x200.png?text=Student+Lifestyle",
            category: "lifestyle",
            content: "Students share their tips on maintaining a healthy work-life balance in college.",
            comments: []
        },
        {
            title: "Upcoming Events: Hackathon 2024",
            image: "https://via.placeholder.com/400x200.png?text=Hackathon+2024",
            category: "events",
            content: "Join us for the upcoming Hackathon 2024, where creativity meets technology.",
            comments: []
        }
    ];

    const articleSection = document.getElementById('articles');

    function displayArticles(filter = 'all') {
        articleSection.innerHTML = '';

        const filteredArticles = filter === 'all' ? articles : articles.filter(article => article.category === filter);

        filteredArticles.forEach(article => {
            const articleDiv = document.createElement('div');
            articleDiv.classList.add('article');
            
            articleDiv.innerHTML = `
                <h2>${article.title}</h2>
                <img src="${article.image}" alt="${article.title}">
                <p>${article.content}</p>
                <div class="comment-section">
                    <h3>Comments</h3>
                    <div class="comments">
                        ${article.comments.map(comment => `<p>${comment}</p>`).join('')}
                    </div>
                    <input type="text" placeholder="Add a comment">
                    <button>Add Comment</button>
                </div>
            `;

            // Add comment functionality
            const input = articleDiv.querySelector('input');
            const button = articleDiv.querySelector('button');
            button.addEventListener('click', () => {
                const comment = input.value;
                if (comment) {
                    article.comments.push(comment);
                    displayArticles(filter);
                }
            });

            articleSection.appendChild(articleDiv);
        });
    }

    // Initial display of articles
    displayArticles();

    // Category filtering
    const categoryLinks = document.querySelectorAll('.category');
    categoryLinks.forEach(link => {
        link.addEventListener('click', function (e) {
            e.preventDefault();
            const category = this.getAttribute('data-category');
            displayArticles(category);
        });
    });
});
