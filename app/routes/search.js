import Ember from 'ember';

export default Ember.Route.extend({
  queryParams: {
    q: { refreshModel: true }
  },

  model(params) {
    return this.get('github').search(params.q);
  }
});
