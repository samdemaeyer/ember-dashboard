'use strict';

const EmberApp = require('ember-cli/lib/broccoli/ember-app');

module.exports = function(defaults) {
  let app = new EmberApp(defaults, {
    // Add options here
  });

  app.import('vendor/fontawesome-free/css/all.min.css');
  app.import('vendor/fontawesome-free/webfonts/fa-brands-400.eot', { destDir: 'webfonts' });
  app.import('vendor/fontawesome-free/webfonts/fa-brands-400.svg', { destDir: 'webfonts' });
  app.import('vendor/fontawesome-free/webfonts/fa-brands-400.ttf', { destDir: 'webfonts' });
  app.import('vendor/fontawesome-free/webfonts/fa-brands-400.woff', { destDir: 'webfonts' });
  app.import('vendor/fontawesome-free/webfonts/fa-brands-400.woff2', { destDir: 'webfonts' });
  app.import('vendor/fontawesome-free/webfonts/fa-regular-400.eot', { destDir: 'webfonts' });
  app.import('vendor/fontawesome-free/webfonts/fa-regular-400.svg', { destDir: 'webfonts' });
  app.import('vendor/fontawesome-free/webfonts/fa-regular-400.ttf', { destDir: 'webfonts' });
  app.import('vendor/fontawesome-free/webfonts/fa-regular-400.woff', { destDir: 'webfonts' });
  app.import('vendor/fontawesome-free/webfonts/fa-regular-400.woff2', { destDir: 'webfonts' });
  app.import('vendor/fontawesome-free/webfonts/fa-solid-900.eot', { destDir: 'webfonts' });
  app.import('vendor/fontawesome-free/webfonts/fa-solid-900.svg', { destDir: 'webfonts' });
  app.import('vendor/fontawesome-free/webfonts/fa-solid-900.ttf', { destDir: 'webfonts' });
  app.import('vendor/fontawesome-free/webfonts/fa-solid-900.woff', { destDir: 'webfonts' });
  app.import('vendor/fontawesome-free/webfonts/fa-solid-900.woff2', { destDir: 'webfonts' });

  return app.toTree();
};
