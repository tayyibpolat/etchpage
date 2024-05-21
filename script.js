document.addEventListener('DOMContentLoaded', () => {
    const container = document.getElementById('container');

    let btn = document.createElement("button");
    btn.textContent = "Button";
    document.body.appendChild(btn);
    document.body.insertBefore(btn, container);

    let input = prompt("choose a number between 0 and 100");
    let num = input * input;
    for (let i = 0; i < num; i++) {
        const item = document.createElement('div');
        item.className = 'grid-item';
        container.appendChild(item);
    }
});
