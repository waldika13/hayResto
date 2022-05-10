import CONFIG from '../../globals/config';

const createRestoDetailTemplate = (resto) => `
    <h2 class="resto__title">${resto.restaurant.name}</h2>
    <img class="resto__poster" src="${CONFIG.BASE_IMAGE_URL + resto.restaurant.pictureId}" alt="${resto.restaurant.name}" />
    <div class="resto__info">
    <h3 class="resto__tag-info">Information</h3>
    <h4>Adress</h4>
    <p>${resto.restaurant.address}</p>
    <h4>City</h4>
    <p>${resto.restaurant.city}</p>
    <h4>Description</h4>
    <p align="justify">${resto.restaurant.description}</p>
    <h4><i class="fa-solid fa-bowl-food"></i> List Food's</h4>
    <div class="menu__overview">
        ${resto.restaurant.menus.foods.map((menu) => `
            <div class="menu__nfo">
                <p><i class="fa-solid fa-check"></i> ${menu.name}</p>
            </div>
        `).join('')}
    </div>
    <h4><i class="fa-solid fa-beer-mug-empty"></i> List Drink's</h4>
    <div class="menu__overview">
        ${resto.restaurant.menus.drinks.map((menu) => `
            <div class="menusInfo">
                <p><i class="fa-solid fa-check"></i> ${menu.name}</p>
            </div>
        `).join('')}
    </div>
  </div>
  <h3 class="resto">Review Customers</h3>
    <div class="resto__overview">
      ${resto.restaurant.customerReviews.map((review) => `
          <div class="review__info">
              <h6>${review.name}</h6>
              <p>${review.review}</p>
              <p class="date__review">${review.date}</p>
          </div>
      `).join('')}
    </div>
`;

const createRestoItemTemplate = (resto) => `
  <div class="resto-item">
    <div class="resto-item__header">
        <img class="resto-item__header__poster" alt="${resto.name}"
            src="${resto.pictureId ? CONFIG.BASE_IMAGE_URL + resto.pictureId : 'https://picsum.photos/id/666/800/450?grayscale'}">
        <div class="resto-item__header__rating">
            <p>⭐️<span class="resto-item__header__rating__score">${resto.rating}</span></p>
        </div>
    </div>
    <div class="resto-item__content">
        <h3 class="resto-title"><a href="${`/#/detail/${resto.id}`}">${resto.name}</a></h3>
        <p>${resto.description}</p>
    </div>
  </div>
  `;

const createLikeRestoButtonTemplate = () => `
  <button aria-label="like this restaurant" id="likeButton" class="like">
  <i class="fa-regular fa-heart"></i>
  </button>
`;

const createUnlikeRestoButtonTemplate = () => `
  <button aria-label="unlike this restaurant" id="likeButton" class="like">
    <i class="fa-solid fa-heart"></i>
  </button>
`;

export {
  createRestoDetailTemplate,
  createRestoItemTemplate,
  createLikeRestoButtonTemplate,
  createUnlikeRestoButtonTemplate,
};
