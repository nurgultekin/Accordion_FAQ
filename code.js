document.addEventListener("DOMContentLoaded", function () {
    // Function to toggle the "active" class and show/hide the panel
    function toggleAccordion(e) {
        const element = e.target;
        element.classList.toggle("active");

        // Toggle the display of the next element (panel)
        const panel = element.nextElementSibling;
        if (panel.style.display === "block" || panel.style.display === "") {
            panel.style.display = "none";
        } else {
            panel.style.display = "block";
        }
    }

    // Select all elements with the class "accordion"
    let acc = document.querySelectorAll(".accordion");

    // Add click event listeners to each accordion element
    acc.forEach(function (accElement) {
        accElement.addEventListener("click", toggleAccordion);
    });

    // Fetch data from the provided URL
    fetch('https://jsonplaceholder.typicode.com/posts')
        .then(response => response.json())
        .then(data => {
            // Iterate through the data and create FAQ sections
            data.forEach(function (post, index) {
                // Create button element for accordion
                let accordionButton = document.createElement("button");
                accordionButton.className = "accordion";
                accordionButton.innerText = `Section ${index + 1}`;

                // Create div element for panel
                let panelDiv = document.createElement("div");
                panelDiv.className = "panel";
                panelDiv.innerHTML = `<p>${post.body}</p>`;

                // Append elements to the body
                document.body.appendChild(accordionButton);
                document.body.appendChild(panelDiv);
            });
        })
        .catch(error => console.error('Error fetching data:', error));
});
