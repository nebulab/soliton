import Ember from 'ember';

export default Ember.Component.extend({
  searchInput: '',

  actions: {
    search() {
      this.get('search')(this.get('searchInput'));
    }
  }
});
