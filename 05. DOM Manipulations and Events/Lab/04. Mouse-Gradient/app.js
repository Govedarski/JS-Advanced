function attachGradientEvents() {
    const hoverElement = document.getElementById('gradient');
    hoverElement.addEventListener('mousemove', mousePosition);

    function mousePosition(e) {
        let mouseXPosition = e.offsetX;
        const elementWidth = e.currentTarget.clientWidth;
        document.getElementById('result').textContent = `${Math.floor(mouseXPosition / elementWidth * 100)}%`;
    }

}