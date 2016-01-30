import Ember from 'ember';

var repos = [
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

export default Ember.Route.extend({
  model() {
    return repos;
  }
});
