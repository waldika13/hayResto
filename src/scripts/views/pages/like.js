import FavoriteRestaurantIdb from '../../data/favoriterestaurant-idb';
import { createRestoItemTemplate } from '../templates/template-creator';

const Like = {
  async render() {
    return `
    <div class="content">
      <h2 class="content__heading">Your Liked Restaurants</h2>
      <div id="restaurant" class="restaurant">
 
      </div>
    </div>
 `;
  },

  async afterRender() {
    const resto = await FavoriteRestaurantIdb.getAllResto();
    const restoContainer = document.querySelector('#restaurant');

    if (resto.length >= 1) {
      await resto.forEach((restaurant) => {
        restoContainer.innerHTML += createRestoItemTemplate(restaurant);
      });
    } else {
      restoContainer.innerHTML = 'Tidak ada film untuk ditampilkan';
    }
  },
};

export default Like;
