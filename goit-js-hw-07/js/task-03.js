const images = [{
        url: "https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
        alt: "White and Black Long Fur Cat",
    },
    {
        url: "https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
        alt: "Orange and White Koi Fish Near Yellow Koi Fish",
    },
    {
        url: "https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
        alt: "Group of Horses Running",
    },
];

// const galleryList = document.querySelector("#gallery");
// const addGalleryListEl = images.map((element) => {
// const addGalleryListElImg = `<li class="gallery__item"><img src="${element.url}" alt="${element.alt}" width=320 height=150></li>`;
// return addGalleryListElImg;
// });
// galleryList.insertAdjacentHTML("beforeend", addGalleryListEl.join(" "));
// galleryList.setAttribute(
// "style",
// "list-style:none; display: flex; justify-content: space-around;"
// );

const list = document.querySelector("#gallery");

list.classList.add("pictures");

const addGalleryListEl = images.map(function(image) {
    const src = image.url;
    const alt = image.alt;
    const addGalleryListElImg = `<li><img src = ${src},alt = ${alt}, width = 500px></li>`;
    return addGalleryListElImg;
});
list.insertAdjacentHTML("beforeend", addGalleryListEl.join(" "));