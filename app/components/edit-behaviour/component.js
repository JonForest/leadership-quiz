import Component from '@glimmer/component';

// import { inject as service } from '@ember/service'

export default class HelloButton extends Component {
  // @service store;

  @action
  saveBehaviour() {
    debugger
    this.args.behaviour.set('description', 'test')
    this.args.behaviour.save()
  }
}
