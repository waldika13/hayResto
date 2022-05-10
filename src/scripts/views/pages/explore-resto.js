import RestoApiSource from '../../data/restoapi-source';
import { createRestoItemTemplate } from '../templates/template-creator';

const ExploreResto = {
  async render() {
    return `
        <div class="content" >
          <h2 class="content__heading" id="skip-to-content">Explore Restaurants</h2>
          <div id="restaurant" class="restaurant">
  
          </div>
        </div>
      `;
  },

  async afterRender() {
    const resto = await RestoApiSource.exploreResto();
    const restoContainer = document.querySelector('#restaurant');
    resto.forEach((restoran) => {
      restoContainer.innerHTML += createRestoItemTemplate(restoran);
    });
  },
};

export default ExploreResto;
