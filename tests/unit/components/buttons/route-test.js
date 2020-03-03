import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';

module('Unit | Route | components/buttons', function(hooks) {
  setupTest(hooks);

  test('it exists', function(assert) {
    let route = this.owner.lookup('route:components/buttons');
    assert.ok(route);
  });
});
