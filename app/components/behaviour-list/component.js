import Component from '@glimmer/component';
import { tracked } from '@glimmer/tracking';
import { action } from '@ember/object';

export default class BehaviourList extends Component {
  @tracked behaviours

  @action
  dropBehaviour ({ id }) {
    this.args.moveBehaviour(id)
  }
}
