import ExploreResto from '../views/pages/explore-resto';
import Detail from '../views/pages/detail';
import Like from '../views/pages/like';

const routes = {
  '/': ExploreResto,
  '/explore-resto': ExploreResto,
  '/detail/:id': Detail,
  '/like': Like,
};

export default routes;
