import EmberRouter from "@ember/routing/router";
import config from "./config/environment";

const Router = EmberRouter.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.route('behaviour', function() {
    this.route('new');
    this.route('edit', {path: '/:behaviour_id'});
    this.route('all');
  });
  this.route('login');
  this.route('main', {path: '/:team_id'});

  this.route('behaviours', function() {

  });
  this.route('admin');
  this.route('results');
});

export default Router;
