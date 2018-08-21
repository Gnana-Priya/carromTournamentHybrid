import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';

module('Unit | Route | bidding/bidding-manager', function(hooks) {
  setupTest(hooks);

  test('it exists', function(assert) {
    let route = this.owner.lookup('route:bidding/bidding-manager');
    assert.ok(route);
  });
});
