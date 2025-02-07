// Fonction pour ouvrir la modale
function openModal(modalId) {
    var modal = document.getElementById(modalId);  // Trouve l'élément modal avec l'id passé
    if (modal) {  // Vérifie que la modale existe
        modal.style.display = "flex";  // Affiche la modale

        // Ajoute un événement de clic sur le fond pour fermer la modale
        modal.addEventListener('click', function(event) {
            // Si l'utilisateur clique sur le fond (et pas sur le contenu)
            if (event.target === modal) {
                closeModal(modalId);
            }
        });
    } else {
        console.error("Modale non trouvée avec l'id:", modalId);
    }
}

// Fonction pour fermer la modale
function closeModal(modalId) {
    var modal = document.getElementById(modalId);
    if (modal) {
        modal.style.display = "none";  // Cache la modale
    }
}
