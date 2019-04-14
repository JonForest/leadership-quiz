import Component from '@glimmer/component';
import { tracked } from '@glimmer/tracking';

export default class HelloButton extends Component {
  @tracked unallocated
  @tracked self
  @tracked others
  @tracked expertise

  constructor (owner, args) {
    super(...arguments)
    this.unallocated = args.behaviours.slice(0)
    this.self = []
    this.others = []
    this.expertise = []
  }
}
