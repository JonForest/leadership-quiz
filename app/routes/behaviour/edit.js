import Route from '@ember/routing/route';

export default class BehavioursEditRoute extends Route {
  model({ behaviour_id }) {
    return this.store.findRecord('behaviour', behaviour_id)
  }
}
