/* global requireNode */

(function() {
  function vendorModule() {
    'use strict';

    var canRequireNode = !!requireNode,
        platformChoose = canRequireNode ?
          requireNode('platform-choose/src/addon') :
          undefined;

    return { 'default': platformChoose };
  }

  define('platform-choose', [], vendorModule);
})();
