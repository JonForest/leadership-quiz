import Route from '@ember/routing/route';

export default class NewBehaviourRoute extends Route {
  model() {
    return this.store.createRecord('behaviour')
  }

}
