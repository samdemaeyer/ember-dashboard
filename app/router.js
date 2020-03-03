import EmberRouter from '@ember/routing/router';
import config from './config/environment';

export default class Router extends EmberRouter {
  location = config.locationType;
  rootURL = config.rootURL;
}

Router.map(function() {
  this.route('login');
  this.route('register');
  this.route('forgot-password');
  this.route('authenticated', { path: '' }, function() {
    this.route('blank');
    this.route('charts');
    this.route('components', function() {
      this.route('buttons');
      this.route('cards');
    });
    this.route('page-not-found');
    this.route('tables');
    this.route('utilities', function() {
      this.route('colors');
      this.route('borders');
      this.route('animations');
      this.route('other');
    });
  });
});
