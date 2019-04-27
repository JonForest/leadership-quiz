import Component from '@glimmer/component';
import { action } from '@ember/object';
import { inject as service } from '@ember/service'

export default class EditBehaviour extends Component {
  @service router

  constructor(owner, args) {
    super(...arguments)
    this.description = args.behaviour.description
    this.list = args.behaviour.list
    this.team = args.behaviour.team
  }

  @action
  saveBehaviour() {
    this.args.behaviour.setProperties({
      description: this.description,
      list: this.list,
      team: Number(this.team)
    })
    this.args.behaviour.save()
    this.router.transitionTo('admin')
  }
}
