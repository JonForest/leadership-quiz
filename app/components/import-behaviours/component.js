import Component from '@glimmer/component';
import { action } from '@ember/object';
import { inject as service } from '@ember/service'

export default class EditBehaviour extends Component {
  @service router
  @service store

  @action
  async saveBehaviours() {
    const descriptions = this.descriptions.split('\n')
    await Promise.all(descriptions.map(description => this.store.createRecord('behaviour', { description }).save()))
    this.router.transitionTo('admin')
  }
}
