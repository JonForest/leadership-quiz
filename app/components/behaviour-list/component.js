import Component from '@glimmer/component';
import { tracked } from '@glimmer/tracking';
import { action } from '@ember/object';

export default class HelloButton extends Component {
  @tracked behaviours

  constructor (owner, args) {
    super(...arguments)
    this.behaviours = args.behaviours ? args.behaviours.slice(0) : []
    this.behaviours.push({hidden: true})
  }

  @action
  dropBehaviour ({ id }) {
    this.args.moveBehaviour(id)
  }
}
