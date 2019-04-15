import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';

module('Unit | Route | behaviour/new', function(hooks) {
  setupTest(hooks);

  test('it exists', function(assert) {
    let route = this.owner.lookup('route:behaviour/new');
    assert.ok(route);
  });
});
