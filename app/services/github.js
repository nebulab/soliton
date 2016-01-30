import Ember from 'ember';

export default Ember.Service.extend({
  ajax: Ember.inject.service(),

  search(keyword) {
    return this.get('ajax').request('https://api.github.com/search/repositories', {
      method: 'GET',
      data: {
        q: `solidus+${keyword}+language:ruby+in:name,description,readme`,
        sort: 'stars',
        order: 'desc',
        per_page: 100
      }
    });
  }
});
