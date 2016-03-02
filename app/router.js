import Ember from 'ember';
import config from './config/environment';
import googlePageview from './mixins/google-pageview';

const Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.route('search');
});

export default Router;
