import { test } from 'qunit';
import moduleForAcceptance from 'solidon/tests/helpers/module-for-acceptance';

moduleForAcceptance('Acceptance | search');

test('visiting /search', function(assert) {
  visit('/search');

  andThen(function() {
    assert.equal(currentURL(), '/search');
  });
});

test('searching for solidus package', function(assert) {
  var packages = server.createList('package', 3);

  visit('/search');

  fillIn('.search-box__input', 'Solidus Devise');
  click('.search-box__submit');

  andThen(function() {
    assert.equal(find('li').length, 3);
    assert.equal(find('li:first').text(), packages[0].name);
  });
});
