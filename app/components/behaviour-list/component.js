import Component from '@glimmer/component';
import { tracked } from '@glimmer/tracking';

export default class HelloButton extends Component {
  @tracked behaviours

  constructor (owner, args) {
    super(...arguments)
    this.behaviours = args.behaviours || []
    this.behaviours.push({hidden: true})
  }
}
