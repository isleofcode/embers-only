module.exports = {
  name: 'platform-choose',

  included: function(app, parentAddon) {
    app.import('vendor/shims/platform-choose.js');
    return this._super(app, parentAddon);
  },

  isDevelopingAddon: function() {
    return true;
  }
};
