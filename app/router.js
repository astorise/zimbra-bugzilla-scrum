import Ember from 'ember';
import config from './config/environment';

var Router = Ember.Router.extend({
  location: config.locationType
});

export default Router.map(function() {
  this.route('products');
  this.route('keywords');
  this.route('sprint', {path:'/sprint/:sprint_id'}, function() {
    this.route('work', function() {
      this.route('bug', {path:'/:bug_id'});
    });
    this.route('plan');
    this.route('report');
  });
});
