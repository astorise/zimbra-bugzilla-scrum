import {
  moduleForModel,
  test
} from 'ember-qunit';

moduleForModel('bug', {
  // Specify the other units that are required for this test.
  needs: ['model:comment', 'model:history']
});

test('it exists', function(assert) {
  var model = this.subject();
  // var store = this.store();
  assert.ok(!!model);
});
