import API_ENDPOINT from '../globals/api-endpoint';

class RestoApiSource {
  static async exploreResto() {
    const response = await fetch(API_ENDPOINT.EXPLORE_RESTO);
    const responseJson = await response.json();
    return responseJson.restaurants;
  }

  static async detailResto(id) {
    const response = await fetch(API_ENDPOINT.DETAIL(id));
    return response.json();
  }
}

export default RestoApiSource;
