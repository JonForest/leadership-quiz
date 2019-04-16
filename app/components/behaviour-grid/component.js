import Component from '@glimmer/component';
import { tracked } from '@glimmer/tracking';
import { action } from '@ember/object';

export default class BehaviourGrid extends Component {
  @tracked behaviours

  constructor (owner, args) {
    super(...arguments)
    this.behaviours = args.behaviours.slice(0)
    this.behaviours[4].set('list', 'others')
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
  moveBehaviour(toList, id) {
    console.log(this.unallocated.length)
    const behaviour = this.args.behaviours.find(behaviour => behaviour.id === id)
    behaviour.set('list', toList)
    // Fire the setter
    this.behaviours = this.behaviours
    console.log(this.unallocated.length)
  }
}
