import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';

module('Unit | Route | utilities/borders', function(hooks) {
  setupTest(hooks);

  test('it exists', function(assert) {
    let route = this.owner.lookup('route:utilities/borders');
    assert.ok(route);
  });
});
