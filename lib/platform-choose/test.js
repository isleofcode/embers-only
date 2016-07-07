var RSVP = require('rsvp'),
    assert = require('assert'),
    platformChoose = require('./src/addon'),
    regularChoose = platformChoose.regularChoose,
    eightInchChoose = RSVP.denodeify(platformChoose.eightInchChoose),
    returned;

assert.doesNotThrow(function() { returned = platformChoose.regularChoose(); });
assert.equal(returned, '');

console.log(`#regularChoose (empty == success): ${returned}`);

RSVP.on('error', function(reason) {
  assert.fail(reason);
});

eightInchChoose()
  .then(() => {
    console.log(`#eightInchChoose (empty == success):`);
  })
  .catch(err => {
    console.log(`#eightInchChoose (empty == success): ${err}`);
    assert.fail(err);
  });
