import Ember from 'ember';
import GithubInitializer from '../../../initializers/github';
import { module, test } from 'qunit';

let application;

module('Unit | Initializer | github', {
  beforeEach() {
    Ember.run(function() {
      application = Ember.Application.create();
      application.deferReadiness();
    });
  }
});

// Replace this with your real tests.
test('it works', function(assert) {
  GithubInitializer.initialize(application);

  // you would normally confirm the results of the initializer here
  assert.ok(true);
});
