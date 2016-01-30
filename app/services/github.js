import Ember from 'ember';

export default Ember.Service.extend({
  search(keyword) {
    return [
      {
        id: 1,
        title: 'solidus/solidus-alchemy',
        link: 'http://google.com'
      },
      {
        id: 2,
        title: 'solidus/solidus-devise',
        link: 'http://google.com'
      }
    ];
  }
});
