document.addEventListener('DOMContentLoaded', () => {
    const container = document.getElementById('container');

    let btn = document.createElement("button");
    btn.textContent = "Button";
    document.body.appendChild(btn);
    document.body.insertBefore(btn, container);

    btn.addEventListener('click', function() {
        let input = prompt("Choose a number between 0 and 100");
        let num = parseInt(input, 10);

        container.innerHTML = ''; // Clear previous items

        let itemsPerRow = Math.floor(container.clientWidth / 50); // Calculate items per row based on item width
        let totalItems = num * num;

        // Adjust total items to ensure last row is filled
        let rows = Math.ceil(totalItems / itemsPerRow);
        totalItems = rows * itemsPerRow;

        for (let i = 0; i < totalItems; i++) {
            const item = document.createElement('div');
            item.className = 'grid-item';
            container.appendChild(item);
        }

        // Adjust the container's CSS variables to set the number of rows
        container.style.setProperty('--rows', rows);
    });
});

