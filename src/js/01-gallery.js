// Add imports above this line
import { galleryItems } from './gallery-items';
// Change code below this line
import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";

console.log(galleryItems);


const ulList = document.querySelector(".gallery");

const renderList = (arr, container) => { 
  const markup = arr.map((item) => `
    <li class="gallery_item" > 
      <a class="gallery_link" href="${item.original}">
        <img
          class="gallery_image"
          src="${item.preview}"
          data-source="${item.original}"
          alt="${item.description}"
          width="330px"
        />
      </a>
    </li>`).join("");
  
  container.insertAdjacentHTML("afterbegin", markup);
}

const lightbox = new SimpleLightbox('.gallery a', { /* options */
captionsData: "alt",
captionDelay: 250,
 });