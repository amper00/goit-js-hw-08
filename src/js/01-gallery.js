
import { galleryItems } from "./gallery-items.js";
import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';


const gallery = document.querySelector(".gallery");

const newArray = galleryItems.map(
  (element) =>
    `<li class="gallery__item">
      <a class="gallery__link" href="${element.original}">
        <img
          class="gallery__image"
          src="${element.preview}" 
          alt="${element.description}"
        />
      </a>
     </li>`
);

gallery.innerHTML = newArray.join("");

const lightbox = new SimpleLightbox('.gallery a', {
  captionDelay: 250,
  captionsData: 'alt'
});

console.log(galleryItems);
