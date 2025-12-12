const planets = document.querySelectorAll('.planet');
const infoBox = document.getElementById('infoBox');

planets.forEach(planet => {
    planet.addEventListener('mouseenter', () => {
        infoBox.textContent = planet.getAttribute('data-info');
    });

    planet.addEventListener('mouseleave', () => {
        infoBox.textContent = "Hover on any planet";
    });
});
