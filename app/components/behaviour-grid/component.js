import Component from '@glimmer/component';
import { tracked } from '@glimmer/tracking';
import { action } from '@ember/object';

export default class BehaviourGrid extends Component {
  @tracked behaviours

  constructor (owner, args) {
    super(...arguments)
    this.behaviours = args.behaviours.slice(0)
  }

  get unallocated() {
    return this.behaviours.filter(behaviour => behaviour.list === 'unallocated')
  }

  get self() {
    return this.behaviours.filter(behaviour => behaviour.list === 'self')
  }

  get others() {
    return this.behaviours.filter(behaviour => behaviour.list === 'others')
  }

  get expertise() {
    return this.behaviours.filter(behaviour => behaviour.list === 'expertise')
  }

  @action
  async moveBehaviour(toList, id) {
    const behaviour = this.args.behaviours.find(behaviour => behaviour.id === id)
    behaviour.set('list', toList)
    await behaviour.save()

    // Fire the setter
    this.behaviours = this.behaviours
  }
}
