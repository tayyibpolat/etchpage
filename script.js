document.addEventListener('DOMContentLoaded', () => {
    const container = document.getElementById('container');
    const totalItems = 50 * 50;

    for (let i = 0; i < totalItems; i++) {
        const item = document.createElement('div');
        item.className = 'grid-item';
        container.appendChild(item);
    }
});
