document.addEventListener('DOMContentLoaded', async function() {
    const searchContainer = document.querySelector('.search-container');
    const iframeWindow = document.getElementById("iframeWindow");
    const searchBar = document.getElementById("urlInput");
    const searchButton = document.getElementById("searchButton");

    // Event listener for Enter key in the search bar
    searchBar.addEventListener("keydown", function (event) {
        if (event.key === "Enter") {
            event.preventDefault();
            searchButton.click();
        }
    });

    // Search button click event
    searchButton.onclick = function (event) {
        event.preventDefault();

        let url = searchBar.value.trim();
        let searchUrl = "https://www.google.com/search?q=";

        if (!url.includes(".")) {
            url = searchUrl + encodeURIComponent(url);
        } else if (!url.startsWith("http://") && !url.startsWith("https://")) {
            url = "https://" + url;
        }

        // Load the URL into the iframe
        iframeWindow.src = __uv$config.prefix + __uv$config.encodeUrl(url);
        iframeWindow.style.display = "block";

        // Hide the search container
        searchContainer.style.display = "none";
    };
});
