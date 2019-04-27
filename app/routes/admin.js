import Route from '@ember/routing/route';

export default class AdminRoute extends Route {
  model() {
    return this.store.findAll('behaviour')
  }
}
