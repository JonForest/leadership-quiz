import Controller from '@ember/controller';
import { action } from '@ember/object';

export default class AdminController extends Controller {

  getTeam() {
    const selectedTeam = Math.floor(Math.random() * 4) + 1
    if (this.teamCount[selectedTeam - 1] > 0) {
      this.teamCount[selectedTeam - 1] = this.teamCount[selectedTeam - 1] - 1
      return selectedTeam
    } else {
      return this.getTeam()
    }
  }

  @action
  randomGroupAssign() {
    const numbBehavioursPerTeam = Math.ceil(this.model.length / 4)
    this.teamCount = [numbBehavioursPerTeam, numbBehavioursPerTeam, numbBehavioursPerTeam, numbBehavioursPerTeam]

    this.model.forEach(behaviour => {
      behaviour.set('team', this.getTeam())
      behaviour.save()
    })
  }
}
