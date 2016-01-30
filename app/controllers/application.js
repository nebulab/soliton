import Ember from 'ember';

export default Ember.Controller.extend({
  actions: {
    search(query) {
      this.transitionToRoute('search', { queryParams: { q: query }});
    }
  }
});
