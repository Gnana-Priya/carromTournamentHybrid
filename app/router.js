import EmberRouter from '@ember/routing/router';
import config from './config/environment';

const Router = EmberRouter.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.route('bidding', function() {
    this.route('bidding-manager');
    this.route('bidder');
  });
  this.route('admin', function() {
    this.route('players');
    this.route('teams');
    this.route('matches');
    this.route('tournaments');
  });
});

export default Router;
