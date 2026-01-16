/*
Fetches random images from Picsum API and injects them into .api-card elements
*/

const cards = document.querySelectorAll('.api-card');

async function loadImages() {
    cards.forEach(async (card) => {
        try {

            const response = await fetch('https://picsum.photos/400/300');
            
            if (response.ok) {
                
                const img = document.createElement('img');
                img.src = response.url;
                img.alt = "Imagen aleatoria";
                
                // Clear placeholder before appending the new image
                card.innerHTML = ''; 
                card.appendChild(img);
            }
        } catch (error) {
            console.error("Error conectando a la API:", error);
        }
    });
}

// Initialize the function on page load
loadImages();