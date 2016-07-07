import Ember from 'ember';
import PlatformChoose from 'platform-choose';

const {
  RSVP: {
    denodeify,
    reject,
    resolve
  },
  Service,
  isBlank,
  isEmpty
} = Ember;

const {
  regularChoose,
  eightInchChoose
} = PlatformChoose;

const NO_CHOOSE_ERROR = 'could not find your platform choose';

export default Service.extend({
  regularChoose() {
    let value;

    if (isBlank(regularChoose)) { value = NO_CHOOSE_ERROR; }
    else { value = regularChoose(); }

    return isEmpty(value) ?
      resolve() :
      reject(value);
  },

  eightInchChoose() {
    if (isBlank(eightInchChoose)) { return reject(NO_CHOOSE_ERROR); }
    return denodeify(eightInchChoose)()
      .catch(err => {
        if (err === true || err === 'true') { return resolve(); }
        else { return reject(err); }
      });
  }
});
