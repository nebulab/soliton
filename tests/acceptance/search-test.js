import { test } from 'qunit';
import moduleForAcceptance from 'soliton/tests/helpers/module-for-acceptance';

moduleForAcceptance('Acceptance | search');

test('visiting /search', function(assert) {
  visit('/search');

  andThen(function() {
    assert.equal(currentURL(), '/search');
  });
});

test('show results when repos found', function(assert) {
  var packages = server.createList('package', 3),
      repoName = new RegExp(packages[0].full_name);

  visit('/search');

  fillIn('.search-box__input', 'Solidus Awesomeness');
  click('.search-box__submit');

  andThen(function() {
    assert.equal(find('li').length, 3);
    assert.ok(repoName.test(find('li:first').text()));
  });
});

test('show no results when no repos found', function(assert) {
  server.createList('package', 0);

  visit('/search');

  fillIn('.search-box__input', 'Solidus Awesomeness');
  click('.search-box__submit');

  andThen(function() {
    assert.equal(find('li').length, 0);
  });
});
