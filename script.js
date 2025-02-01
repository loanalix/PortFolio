function setupSmoothScrolling() {
    console.log("Initialisation du défilement fluide...");
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });
}

function setupImagePreview() {
    console.log("Initialisation de l'aperçu d'image...");

    const thumbnails = [
        ...document.querySelectorAll('.grid-projets img'),
        ...document.querySelectorAll('.projet-images img')
    ];
    const imagePreview = document.getElementById('imagePreview');
    const previewImage = document.getElementById('previewImage');
    const closePreview = document.getElementById('closePreview');

    // Afficher l'aperçu lorsque l'image est cliquée
    thumbnails.forEach(thumbnail => {
        thumbnail.addEventListener('click', () => {
            console.log("Aperçu pour :", thumbnail.src);
            previewImage.src = thumbnail.src; // Charge la source de l'image
            imagePreview.style.display = 'flex'; // Affiche l'aperçu
        });
    });

    // Fermer l'aperçu en cliquant sur "×"
    closePreview.addEventListener('click', () => {
        console.log("Fermeture via le bouton de fermeture");
        imagePreview.style.display = 'none'; // Cache l'aperçu
    });

    // Fermer l'aperçu en cliquant en dehors de l'image
    imagePreview.addEventListener('click', (e) => {
        if (e.target === imagePreview) {
            console.log("Fermeture en cliquant en dehors de l'image");
            imagePreview.style.display = 'none';
        }
    });
}

// Fonction pour charger la vidéo en asynchrone
function loadVideo() {
    let video = document.getElementById("background-video");
    let source = document.createElement("source");
    source.src = "videos/Background.mp4"; // Chemin vers ta vidéo
    source.type = "video/mp4";
    video.appendChild(source);
    video.load();
    video.play();
}

document.addEventListener("DOMContentLoaded", () => {
    setupSmoothScrolling();
    setupImagePreview();
    loadVideo();
});

