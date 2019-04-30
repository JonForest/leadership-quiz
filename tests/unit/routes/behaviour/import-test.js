import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';

module('Unit | Route | behaviour/import', function(hooks) {
  setupTest(hooks);

  test('it exists', function(assert) {
    let route = this.owner.lookup('route:behaviour/import');
    assert.ok(route);
  });
});
