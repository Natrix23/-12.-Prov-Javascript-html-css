// 6. Hämta och visa foton. (3p)
// Ladda ner foton med fetch från denna url: https://jsonplaceholder.typicode.com/photos
// Visa dom första 10 fotona på sidan.
// När man klickar på ett foto ska dess titel visas i en popup med `alert`
// Funktion för att hämta foton från API
async function fetchPhotos() {
    try {
      const response = await fetch('https://jsonplaceholder.typicode.com/photos');
      const photos = await response.json();
      displayPhotos(photos);
    } catch (error) {
      console.error('Error fetching photos:', error);
    }
  }
  
  function displayPhotos(photos) {
    const photoContainer = document.getElementById('photo-container');
    const first10Photos = photos.slice(0, 10);
  
    first10Photos.forEach(photo => {
      const imgElement = document.createElement('img');
      imgElement.src = photo.url;
      imgElement.alt = photo.title;
      imgElement.classList.add('photo'); 
  
      imgElement.addEventListener('click', () => {
        alert(photo.title);
      });
  
      photoContainer.appendChild(imgElement);
    });
  }
  
  fetchPhotos();