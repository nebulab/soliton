import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('search-package', 'Integration | Component | search package', {
  integration: true
});

test('it renders', function(assert) {
  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });"

  this.render(hbs`{{search-package}}`);

  assert.equal(this.$().text().trim(), 'search');

  // Template block usage:"
  this.render(hbs`
    {{#search-package}}
      template block text
    {{/search-package}}
  `);

  assert.equal(this.$().text().trim(), 'search');
});
