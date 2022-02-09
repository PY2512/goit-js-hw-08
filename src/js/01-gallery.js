import { galleryItems } from './gallery-items.js';
import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";
// Change code below this line

console.log(galleryItems);

const galeryBox = document.querySelector('.gallery');

const geleryMarkup = galleryItems.map((item) => {
    return `
    <li>
    <a class="gallery__item" href="${item.original}">
        <img
        class="gallery__image"
        src="${item.preview}"
        alt="${item.description}"
        />
    </a>
    </li>
    `
}).join('');

galeryBox.innerHTML = geleryMarkup;

const lightbox = new SimpleLightbox('.gallery a', { captionsData: 'alt', captionDelay: 250, });