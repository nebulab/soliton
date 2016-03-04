import Ember from 'ember';

export default Ember.Service.extend({
  ajax: Ember.inject.service(),
  base_endpoint: 'https://api.github.com/',

  search_repository(keyword) {
    return `${this.base_endpoint}search/repositories?${this.search_query(keyword)}`;
  },

  search_query(keyword) {
    let q = [ keyword,
              'solidus',
              'language:ruby',
              'in:name,description' ].join('+');

    let options = [ 'sort:stars',
                    'order:desc',
                    'per_page:100' ].join('&');

    return `q=${q}&${options}`;
  },

  search(keyword) {
    return this.get('ajax').request(this.search_repository(keyword));
  }
});
