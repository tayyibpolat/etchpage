document.addEventListener('DOMContentLoaded', () => {
    const container = document.getElementById('container');
    let btn = document.createElement("button");
    btn.textContent = "Button";
    //document.body.appendChild(btn);
    document.body.insertBefore(btn, container);

    btn.addEventListener('click', function() {
        container.innerHTML = ''; // Clear previous items
        let input = prompt("Choose a number between 0 and 100");
        let num = parseInt(input, 10);
        
        let totalItems = num * num;
        let itemWidth = container.clientWidth / num;
        let itemHeight = container.clientHeight / num;

        for (let i = 0; i < totalItems; i++) {
            const item = document.createElement('div');
            item.className = 'grid-item';
            item.style.width = `${itemWidth}px`;
            item.style.height = `${itemHeight}px`;
            container.appendChild(item);

            item.addEventListener('mouseover', function() {
                item.style.backgroundColor = getRandomColor();
            });
        }
    });

    function getRandomColor() {
        const r = Math.floor(Math.random() * 256);
        const g = Math.floor(Math.random() * 256);
        const b = Math.floor(Math.random() * 256);
        return `#${r.toString(16).padStart(2, '0')}${g.toString(16).padStart(2, '0')}${b.toString(16).padStart(2, '0')}`;
    }
});
