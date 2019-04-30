import Route from '@ember/routing/route';

export default class BehaviourAllRoute extends Route {
  model () {
    return this.store.findAll('behaviour')
  }
}
