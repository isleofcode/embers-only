import Ember from 'ember';
import fetch from "ember-network/fetch";

const {
  Route,
  RSVP
} = Ember;

const GIPHY_RANDOM_URL_BASE = 'https://api.giphy.com/v1/gifs/random?api_key=dc6zaTOxFJmzC';
const GIPHY_QUERY_PARAMS = {
  tag: '"vin diesel" "xxx"',
  rating: 'g'
};

export default Route.extend({
  model() {
    return RSVP.hash({
      isFetchingImage: false,
      xxxImageUrl: this.fetchXxxGiphyImage(GIPHY_QUERY_PARAMS)
    });
  },

  setupController(controller, model) {
    controller.setProperties(model);
  },

  fetchXxxGiphyImage(queryParams={}) {
    let url = GIPHY_RANDOM_URL_BASE;

    Object.keys(queryParams).forEach(key => {
      let value = encodeURIComponent(queryParams[key]);

      url = `${url}&${key}=${value}`;
    });

    return fetch(url)
      .then(response => {
        return response.json();
      })
      .then(json => {
        return json.data.image_url;
      });
  },

  actions: {
    loadMoreXxx() {
      this.set('controller.isFetchingImage', true);

      this.fetchXxxGiphyImage(GIPHY_QUERY_PARAMS)
        .then(imageUrl => {
          this.set('controller.xxxImageUrl', imageUrl);
        })
        .catch(() => {
          alert('xxx overload');
        })
        .finally(() => {
          this.set('controller.isFetchingImage', false);
        });
    }
  }
});
